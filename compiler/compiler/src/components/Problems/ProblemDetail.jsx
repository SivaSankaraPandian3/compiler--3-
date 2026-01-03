import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useParams, useNavigate } from 'react-router-dom';
import { problemsApi, progressApi } from '../../services/api';
import { executeCode, sqlDatabase } from '../../utils/codeExecutor';
import CodeEditor from '../Editor';
import './ProblemDetail.css';

const ProblemDetail = () => {
    const { topic, problemId } = useParams();
    const navigate = useNavigate();
    const [problem, setProblem] = useState(null);
    const [code, setCode] = useState('');
    const [output, setOutput] = useState(null);
    const [testResults, setTestResults] = useState([]);
    const [isSolved, setIsSolved] = useState(false);
    const [isExecuting, setIsExecuting] = useState(false);
    const [pyodide, setPyodide] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sqlDialect, setSqlDialect] = useState('sql'); // Default to generic SQL

    useEffect(() => {
        const initPython = async () => {
            if (topic === 'python' && !pyodide && window.loadPyodide) {
                try {
                    const py = await window.loadPyodide();
                    setPyodide(py);
                } catch (e) {
                    console.error("Failed to load Pyodide:", e);
                }
            }
        };
        initPython();
    }, [topic, pyodide]);

    useEffect(() => {
        const fetchProblem = async () => {
            try {
                setLoading(true);
                const response = await problemsApi.getProblemById(problemId);
                if (response.success) {
                    setProblem(response.data);

                    // Fetch saved code and solved status
                    const progressResponse = await progressApi.getUserProgress('default-user', topic);
                    if (progressResponse.success) {
                        const userProgress = progressResponse.data.find(p => (p.problemId?._id || p.problemId) === problemId);
                        if (userProgress) {
                            setCode(userProgress.savedCode || response.data.starterCode);
                            setIsSolved(userProgress.isSolved);
                        } else {
                            setCode(response.data.starterCode);
                        }
                    } else {
                        setCode(response.data.starterCode);
                    }
                }
            } catch (err) {
                console.error('Error fetching problem:', err);
                setError('Failed to load problem.');
            } finally {
                setLoading(false);
            }
        };
        fetchProblem();
    }, [topic, problemId]);

    if (loading) return <div className="loading">Loading problem...</div>;
    if (error || !problem) {
        return (
            <div className="problem-detail-container">
                <div className="problem-error">
                    <h2>{error || 'Problem Not Found'}</h2>
                    <button onClick={() => navigate(`/problems/${topic}`)} className="btn-primary">
                        Back to Problems
                    </button>
                </div>
            </div>
        );
    }

    const handleCodeChange = (newCode) => {
        setCode(newCode);
        // Throttle this in production
        progressApi.saveUserCode({
            userId: 'default-user',
            topic,
            problemId,
            savedCode: newCode
        }).catch(err => console.error('Error saving code:', err));
    };

    const handleRun = async () => {
        setIsExecuting(true);
        setOutput(null);
        setTestResults([]);

        try {
            const result = await executeCode(topic === 'sql' ? sqlDialect : topic, code, { pyodide });
            setOutput(result);

            if (result.error) {
                setTestResults([{ pass: false, error: result.error }]);
            } else {
                setTestResults([{ pass: true, message: "Run successful" }]);
            }

        } catch (e) {
            setOutput({ error: e.message });
            setTestResults([{ pass: false, error: e.message }]);
        } finally {
            setIsExecuting(false);
        }
    };

    const areResultsEqual = (res1, res2, userCode, solutionCode) => {
        if (!res1 || !res2) return false;

        // Basic sanity check to ensure user didn't just delete everything
        if (!userCode || userCode.trim().length < 5) return false;

        // If it's a value-based result (Python, JS logic, SQL)
        if (res1.data && res2.data && Array.isArray(res1.data) && Array.isArray(res2.data)) {
            if (res1.data.length !== res2.data.length) return false;

            // For SQL: Compare values only, ignoring keys (column names), as user might use aliases
            if (topic === 'sql') {
                const getValues = (rows) => rows.map(row => Object.values(row).map(v => String(v).toLowerCase()).sort());
                const uVals = getValues(res1.data).sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
                const sVals = getValues(res2.data).sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
                return JSON.stringify(uVals) === JSON.stringify(sVals);
            }

            const sortRows = (rows) => [...rows].sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
            return JSON.stringify(sortRows(res1.data)) === JSON.stringify(sortRows(res2.data));
        }

        const requiredKeywords = [
            'useState', 'useEffect', 'useCallback', 'useMemo', 'useRef', 'useContext',
            'onClick', 'onChange', 'onSubmit', 'fetch', 'axios', '.map(', '.filter(', '.reduce(',
            'for', 'while', 'if', 'else', 'function', 'public', 'class', 'static', 'void',
            'int', 'string', 'bool', 'cout', 'cin', 'system.out', 'print(', 'console.log',
            '@Component', 'selector', 'template', 'ngModule', 'NgModule'
        ];

        const checkRequiredKeywords = (user, solution) => {
            const cleanUser = user.toLowerCase().replace(/\s/g, '');
            const cleanSolution = solution.toLowerCase().replace(/\s/g, '');

            // Check if solution uses any of the required keywords
            for (let keyword of requiredKeywords) {
                const cleanKeyword = keyword.toLowerCase().replace(/[()]/g, '').replace(/\s/g, '');
                if (cleanSolution.includes(cleanKeyword)) {
                    // If solution has this keyword, user must have it too
                    if (!cleanUser.includes(cleanKeyword)) {
                        return false;
                    }
                }
            }

            // CSS Property check for CSS/HTML problems
            if (topic === 'css' || topic === 'html' || topic === 'react') {
                const commonProps = [
                    'color:', 'background', 'font-', 'margin', 'padding', 'border',
                    'display:', 'flex', 'grid', 'position:', 'top:', 'left:', 'right:', 'bottom:',
                    'width:', 'height:', 'justify-', 'align-', 'text-'
                ];
                for (let prop of commonProps) {
                    const cleanProp = prop.replace(/[:\s]/g, '');
                    if (cleanSolution.includes(cleanProp) && !cleanUser.includes(cleanProp)) {
                        return false;
                    }
                }
            }

            return true;
        };

        // For React/HTML: Check for structural elements and logic keywords
        if (res1.html && res2.html) {
            // Extract text content from both outputs for comparison
            const extractTextContent = (html) => {
                // Remove script and style tags and their content before extracting text
                const cleanHtml = html.replace(/<(script|style)\b[^>]*>([\s\S]*?)<\/\1>/gim, " ");
                // Remove all other HTML tags and normalize whitespace
                return cleanHtml.replace(/<[^>]*>/g, ' ')
                    .replace(/\s+/g, ' ')
                    .trim()
                    .toLowerCase();
            };

            const userText = extractTextContent(res1.html);
            const solutionText = extractTextContent(res2.html);

            // Structural tags
            const extractSignificantTags = (code) => {
                const tags = (code.match(/<[a-z][a-z0-9]*/gi) || [])
                    .map(t => t.toLowerCase())
                    .filter(t => !['<html', '<body', '<head', '<meta', '<script', '<style'].includes(t));
                return new Set(tags);
            };

            const userTags = extractSignificantTags(userCode);
            const solutionTags = extractSignificantTags(solutionCode);


            // Check required keywords (includes CSS property checks now)
            const keywordsMatch = checkRequiredKeywords(userCode, solutionCode);
            if (!keywordsMatch) return false;

            // For CSS-specific problems, verify that properties were actually added
            if (topic === 'css') {
                const normalizedUser = userCode.replace(/\s/g, '').toLowerCase();
                const normalizedStarter = (problem?.starterCode || '').replace(/\s/g, '').toLowerCase();
                // User must have added at least one property-value pair (":")
                if (normalizedUser === normalizedStarter || !normalizedUser.includes(':')) {
                    return false;
                }
            }

            const textMatches = userText.includes(solutionText) || solutionText.includes(userText);

            // Looser structural match: user should have at least some of the tags from the solution
            let tagScore = 0;
            if (solutionTags.size > 0) {
                for (let tag of solutionTags) {
                    if (userTags.has(tag)) tagScore++;
                }
            }

            // Pass if keywords match and (text matches OR we have significant tag overlap)
            return textMatches || (solutionTags.size > 0 && tagScore > 0) || topic === 'css';
        }

        // If it's a console output (Java, C++, Python)
        if (res1.output && res2.output) {
            const normalize = (s) => s.trim().replace(/\r\n/g, '\n').toLowerCase();
            const uOut = normalize(res1.output);
            const sOut = normalize(res2.output);

            // Allow partial match for console output
            const outputMatches = uOut === sOut || uOut.includes(sOut) || sOut.includes(uOut);
            if (!outputMatches) return false;

            return checkRequiredKeywords(userCode, solutionCode);
        }

        return JSON.stringify(res1) === JSON.stringify(res2);
    };

    const handleSubmit = async () => {
        setIsExecuting(true);
        setTestResults([]);

        try {
            // Case 1: Problems with Test Cases (Functional Logic Problems)
            if (problem.testCases && problem.testCases.length > 0) {
                const results = [];
                let allPassed = true;

                for (let i = 0; i < problem.testCases.length; i++) {
                    const testCase = problem.testCases[i];
                    let userTestCode = code;
                    let solutionTestCode = problem.solution;

                    // Append call to function for JS/Python logic problems
                    if (topic === 'javascript' || topic === 'js') {
                        const funcMatch = problem.starterCode.match(/function\s+(\w+)/);
                        if (funcMatch) {
                            const funcName = funcMatch[1];
                            userTestCode += `\nconsole.log(${funcName}(${testCase.input}));`;
                            solutionTestCode += `\nconsole.log(${funcName}(${testCase.input}));`;
                        } else {
                            // Fallback if no function name found but input provided
                            userTestCode += `\nconsole.log(${testCase.input});`;
                            solutionTestCode += `\nconsole.log(${testCase.input});`;
                        }
                    } else if (topic === 'python') {
                        const funcMatch = problem.starterCode.match(/def\s+(\w+)/);
                        if (funcMatch) {
                            const funcName = funcMatch[1];
                            userTestCode += `\nprint(${funcName}(${testCase.input}))`;
                            solutionTestCode += `\nprint(${funcName}(${testCase.input}))`;
                        } else {
                            userTestCode += `\nprint(${testCase.input})`;
                            solutionTestCode += `\nprint(${testCase.input})`;
                        }
                    }

                    const userRes = await executeCode(topic === 'sql' ? sqlDialect : topic, userTestCode, { pyodide });
                    const solRes = await executeCode(topic === 'sql' ? sqlDialect : topic, solutionTestCode, { pyodide });

                    // Check for individual test case error
                    if (userRes.error) {
                        results.push({ pass: false, error: `Error: ${userRes.error}` });
                        allPassed = false;
                        continue;
                    }

                    const isMatch = areResultsEqual(userRes, solRes, userTestCode, solutionTestCode);
                    results.push({
                        pass: isMatch,
                        error: isMatch ? null : `Test Case ${i + 1} Failed: Output does not match expected result.`
                    });
                    if (!isMatch) allPassed = false;
                }

                setTestResults(results);
                if (allPassed) {
                    await progressApi.markProblemSolved({
                        userId: 'default-user',
                        topic,
                        problemId
                    });
                    setIsSolved(true);
                    toast.success('Congratulations! All test cases passed!');
                } else {
                    toast.error("Incorrect Solution. Please try again.");
                }
                return;
            }

            // Case 2: Problems without defined Test Cases (Direct execution, React, SQL, etc.)
            const userResult = await executeCode(topic === 'sql' ? sqlDialect : topic, code, { pyodide });
            if (userResult.error) {
                setTestResults([{ pass: false, error: userResult.error }]);
                setOutput(userResult);
                toast.error("Your code has errors. Please fix them before submitting.");
                return;
            }

            const solutionResult = await executeCode(topic === 'sql' ? sqlDialect : topic, problem.solution, { pyodide });
            const isMatch = areResultsEqual(userResult, solutionResult, code, problem.solution);

            if (isMatch) {
                await progressApi.markProblemSolved({
                    userId: 'default-user',
                    topic,
                    problemId
                });
                setIsSolved(true);
                setTestResults([{ pass: true, message: "Solution Correct! Output matches expected result." }]);
                setOutput(userResult);
                toast.success('Congratulations! Problem marked as solved!');
            } else {
                setTestResults([{ pass: false, error: "Incorrect Solution. Your output does not match the expected result." }]);
                setOutput(userResult);
                toast.error("Incorrect Solution. Please try again.");
            }

        } catch (e) {
            setTestResults([{ pass: false, error: "Validation Error: " + e.message }]);
        } finally {
            setIsExecuting(false);
        }
    };

    const handleReset = () => {
        setCode(problem.starterCode);
        setOutput(null);
        setTestResults([]);
        progressApi.saveUserCode({
            userId: 'default-user',
            topic,
            problemId,
            savedCode: problem.starterCode
        }).catch(err => console.error('Error resetting code:', err));
    };

    const getDifficultyText = (level) => {
        switch (level) {
            case 1: return 'Easy';
            case 2: return 'Medium';
            case 3: return 'Hard';
            default: return 'Unknown';
        }
    };

    const renderOutputContent = () => {
        if (!output) return (
            <div className="output-placeholder">
                <span className="placeholder-icon">▶</span>
                Click &quot;Run Code&quot; to see output...
            </div>
        );
        if (output.error) return <div className="error-message">{output.error}</div>;
        if (output.html) return (
            <div className="iframe-output-wrapper">
                <iframe srcDoc={output.html} title="Output" sandbox="allow-scripts allow-same-origin" style={{ width: '100%', height: '100%', border: 'none', background: 'white' }} />
            </div>
        );
        if (output.columns && output.data) return (
            <div className="table-output-wrapper">
                <table className="result-table">
                    <thead><tr>{output.columns.map(col => <th key={col}>{col}</th>)}</tr></thead>
                    <tbody>{output.data.map((row, idx) => (<tr key={idx}>{output.columns.map(col => <td key={col}>{row[col]}</td>)}</tr>))}</tbody>
                </table>
            </div>
        );
        if (output.output) return <pre>{output.output}</pre>;
        if (output.message) return <div className="success-message">{output.message}</div>;
        return <pre>{JSON.stringify(output, null, 2)}</pre>;
    };

    const getRelevantTables = () => {
        if (!['sql', 'mysql', 'postgresql', 'sqlserver'].includes(topic) || !problem) return [];
        const tables = [];
        const description = problem.description.toLowerCase();

        Object.keys(sqlDatabase).forEach(tableName => {
            // Check if table name is mentioned in description (with word boundary check for safety)
            const regex = new RegExp(`\\b${tableName}\\b`, 'i');
            if (regex.test(description)) {
                tables.push({
                    name: tableName,
                    ...sqlDatabase[tableName]
                });
            }
        });
        return tables;
    };

    const relevantTables = getRelevantTables();

    return (
        <div className="problem-detail-container">
            <div className="problem-detail-header">
                <button onClick={() => navigate(`/problems/${topic}`)} className="btn-back">
                    ← Back to Problems
                </button>
                <div className="problem-status-indicator">
                    {isSolved && <span className="solved-badge">✓ Solved</span>}
                </div>
            </div>

            <div className="problem-detail-content">
                <div className="problem-description-panel">
                    <div className="problem-header-info">
                        <h1>{problem.title}</h1>
                        <div className="problem-meta">
                            <span className={`difficulty-badge difficulty-${problem.difficulty}`}>
                                {getDifficultyText(problem.difficulty)}
                            </span>
                            <div className="problem-tags-list">
                                {problem.tags.map((tag, i) => (
                                    <span key={i} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="problem-description">
                        <h3>Problem Description</h3>
                        <div className="description-text">
                            {problem.description.split('\n').map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}
                        </div>
                    </div>


                    {['sql', 'mysql', 'postgresql', 'sqlserver'].includes(topic) && relevantTables.length > 0 && (
                        <div className="question-tables-section">
                            <h3>Question Tables</h3>
                            <div className="tables-container">
                                {relevantTables.map((table, idx) => (
                                    <div key={idx} className="question-table-wrapper">
                                        <h4 className="table-name">Table: {table.name}</h4>
                                        <div className="table-scroll-container">
                                            <table className="question-table">
                                                <thead>
                                                    <tr>
                                                        {table.columns.map(col => <th key={col}>{col}</th>)}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {table.data.map((row, i) => (
                                                        <tr key={i}>
                                                            {table.columns.map(col => <td key={col}>{row[col]}</td>)}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="problem-editor-panel">
                    <div className="editor-header">
                        <div className="editor-title-group">
                            <h3>Code Editor</h3>
                            {topic === 'sql' && (
                                <select
                                    className="dialect-selector"
                                    value={sqlDialect}
                                    onChange={(e) => setSqlDialect(e.target.value)}
                                >
                                    <option value="sql">Standard SQL</option>
                                    <option value="mysql">MySQL</option>
                                    <option value="postgresql">PostgreSQL</option>
                                    <option value="sqlserver">SQL Server</option>
                                    <option value="sqlite">SQLite</option>
                                    <option value="oracle">Oracle SQL</option>
                                </select>
                            )}
                        </div>
                        <div className="editor-actions">
                            <button onClick={handleReset} className="btn-reset">Reset Code</button>
                        </div>
                    </div>

                    <div className="code-editor-wrapper">
                        <CodeEditor value={code} onChange={handleCodeChange} language={topic === 'sql' ? sqlDialect : topic} />
                    </div>

                    <div className="editor-buttons">
                        <button onClick={handleRun} className="btn-run" disabled={isExecuting}>
                            {isExecuting ? 'Running...' : '▶ Run Code'}
                        </button>
                        <button onClick={handleSubmit} className="btn-submit">✓ Submit Solution</button>
                    </div>

                    <div className="output-panel">
                        <h4>Output</h4>
                        <div className="output-content">{renderOutputContent()}</div>
                    </div>

                    {testResults.length > 0 && (
                        <div className="test-results">
                            <h4>Test Results</h4>
                            {testResults.map((result, i) => (
                                <div key={i} className={`test-case ${result.pass ? 'pass' : 'fail'}`}>
                                    <span className="test-icon">{result.pass ? '✓' : '✗'}</span>
                                    <span className="test-name">Test Case {i + 1}</span>
                                    {!result.pass && <span className="test-error">{result.error}</span>}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProblemDetail;
