import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useParams, useNavigate } from 'react-router-dom';
import { problemsApi, progressApi } from '../../services/api';
import { executeCode, sqlDatabase } from '../../utils/codeExecutor';
import CodeEditor from '../Editor';
import ConfirmModal from '../Common/ConfirmModal';
import InputModal from '../Common/InputModal';
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
    const [sqlDialect, setSqlDialect] = useState('sql');
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem('adminAuth') === 'true');
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showInputModal, setShowInputModal] = useState(false);

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

    const handleCodeChange = (newCode) => {
        setCode(newCode);
        progressApi.saveUserCode({
            userId: 'default-user',
            topic,
            problemId,
            savedCode: newCode
        }).catch(err => console.error('Error saving code:', err));
    };

    const hasSyntaxErrors = (uCode, currentTopic) => {
        const stack = [];
        const pairs = { '(': ')', '{': '}', '[': ']' };
        const openers = new Set(['(', '{', '[']);
        const closers = new Set([')', '}', ']']);

        const cleanCode = uCode
            .replace(/\/\/.*/g, '')
            .replace(/\/\*[\s\S]*?\*\//g, '')
            .replace(/'[^']*'/g, "''")
            .replace(/"[^"]*"/g, '""')
            .replace(/`[^`]*`/g, '``');

        for (let char of cleanCode) {
            if (openers.has(char)) {
                stack.push(char);
            } else if (closers.has(char)) {
                if (stack.length === 0) return true;
                const lastOpener = stack.pop();
                if (pairs[lastOpener] !== char) return true;
            }
        }

        if (currentTopic === 'html' || currentTopic === 'react') {
            const tagRegex = /<\/?([a-z0-9]+)\b[^>]*>/gi;
            const tagStack = [];
            const selfClosingTags = new Set(['img', 'br', 'hr', 'input', 'link', 'meta', 'base', 'col', 'embed', 'area', 'param', 'source', 'track', 'wbr']);
            let match;
            while ((match = tagRegex.exec(uCode)) !== null) {
                const fullTag = match[0];
                const tagName = match[1].toLowerCase();
                const isClosing = fullTag.startsWith('</');
                const isSelfClosing = fullTag.endsWith('/>') || selfClosingTags.has(tagName);
                if (isSelfClosing && !isClosing) continue;
                if (isClosing) {
                    if (tagStack.length === 0) return true;
                    if (tagStack.pop() !== tagName) return true;
                } else {
                    tagStack.push(tagName);
                }
            }
            if (tagStack.length > 0) return true;
        }
        return stack.length > 0;
    };

    const areResultsEqual = (res1, res2, userCode, solutionCode) => {
        if (!res1 || !res2) return false;
        if (!userCode || userCode.trim().length < 5) return false;
        if (!solutionCode || solutionCode.trim().length === 0) return false;

        const currentTopic = (topic || '').toLowerCase();
        const isEasy = (problem?.difficulty === 1);

        if (['javascript', 'react', 'angular', 'js', 'html', 'css'].includes(currentTopic) && hasSyntaxErrors(userCode, currentTopic)) {
            return false;
        }

        const checkRequiredKeywords = (user, solution) => {
            const cleanUser = user.toLowerCase().replace(/\s/g, '');
            const cleanSolution = solution.toLowerCase().replace(/\s/g, '');
            const boilerplateKeywords = new Set(['public', 'class', 'static', 'void', 'function', 'class', 'main', 'args', 'import', 'export', 'default']);

            const requiredKeywordsList = [
                'useState', 'useEffect', 'useCallback', 'useMemo', 'useRef', 'useContext',
                'onClick', 'onChange', 'onSubmit', 'fetch', 'axios', '.map(', '.filter(', '.reduce(',
                'for', 'while', 'if', 'else', 'function', 'public', 'class', 'static', 'void',
                'int', 'string', 'bool', 'cout', 'cin', 'system.out', 'print(', 'console.log',
                '@Component', 'selector', 'template', 'ngModule', 'NgModule',
                '<h1>', '<h2>', '<h3>', '<h4>', '<h5>', '<h6>', '<p>', '<div>', '<span>',
                '<button', '<input', '<ul', '<li', '<ol', '<a', '<table', '<tr', '<td', '<th',
                '<img', '<form'
            ];

            for (let keyword of requiredKeywordsList) {
                const cleanKey = keyword.toLowerCase().replace(/[()]/g, '');
                const isBoilerplate = boilerplateKeywords.has(cleanKey);
                if (isEasy && isBoilerplate) continue;
                const cleanKeyword = keyword.toLowerCase().replace(/[()]/g, '').replace(/\s/g, '');
                if (cleanSolution.includes(cleanKeyword) && !cleanUser.includes(cleanKeyword)) return false;
            }
            return true;
        };

        if (res1.data && res2.data) {
            if (res1.data.length !== res2.data.length) return false;
            const sortRows = (rows) => [...rows].sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
            return JSON.stringify(sortRows(res1.data)) === JSON.stringify(sortRows(res2.data));
        }

        if (res1.html && res2.html) {
            const extractText = (c) => c.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
            const userText = extractText(userCode);
            const solutionText = extractText(solutionCode);
            const extractTags = (c) => {
                const tags = c.match(/<[a-z][a-z0-9]*/gi) || [];
                return new Set(tags.map(t => t.toLowerCase()).filter(t => !['<html', '<body'].includes(t)));
            };
            const uTags = extractTags(userCode);
            const sTags = extractTags(solutionCode);
            const tagMatchCount = Array.from(sTags).filter(t => uTags.has(t)).length;
            const tagRatio = sTags.size > 0 ? tagMatchCount / sTags.size : 1;
            const keywordsMatch = checkRequiredKeywords(userCode, solutionCode);
            const structuralMatch = (tagRatio >= (currentTopic === 'html' ? 0.85 : 0.7));
            const textMatches = userText === solutionText || userText.includes(solutionText) || solutionText.includes(userText);
            const lenientTextPass = isEasy && tagRatio >= 0.8 && userText.length > 2;
            return keywordsMatch && structuralMatch && (textMatches || lenientTextPass);
        }

        if (res1.output && res2.output) {
            const normalize = (s) => s.trim().toLowerCase();
            const uOut = normalize(res1.output);
            const sOut = normalize(res2.output);
            const outputMatches = uOut === sOut || uOut.includes(sOut) || sOut.includes(uOut);
            return outputMatches && checkRequiredKeywords(userCode, solutionCode);
        }

        return JSON.stringify(res1) === JSON.stringify(res2);
    };

    const handleRun = async () => {
        // Simple check for input() usage in Python code
        const cleanCode = code.replace(/#.*$/gm, ''); // Remove regex comments roughly
        if (topic === 'python' && /\binput\s*\(/.test(cleanCode)) {
            setShowInputModal(true);
            return;
        }
        await executeWithInputs([]);
    };

    const executeWithInputs = async (inputs = []) => {
        setIsExecuting(true);
        setOutput(null);
        setTestResults([]);
        try {
            const result = await executeCode(topic === 'sql' ? sqlDialect : topic, code, { pyodide, inputs });
            setOutput(result);
            if (result.error) {
                setTestResults([{ pass: false, error: result.error }]);
            }
        } catch (e) {
            setOutput({ error: e.message });
            setTestResults([{ pass: false, error: e.message }]);
        } finally {
            setIsExecuting(false);
        }
    };

    const handleSubmit = async () => {
        setIsExecuting(true);
        setTestResults([]);
        try {
            if (problem.testCases && problem.testCases.length > 0) {
                const results = [];
                let allPassed = true;
                for (let i = 0; i < problem.testCases.length; i++) {
                    const testCase = problem.testCases[i];
                    let userTestCode = code;
                    let solutionTestCode = problem.solution;
                    if (topic === 'javascript' || topic === 'js') {
                        const funcMatch = problem.starterCode.match(/function\s+(\w+)/);
                        const funcName = funcMatch ? funcMatch[1] : '';
                        userTestCode += `\nconsole.log(${funcName}(${testCase.input}));`;
                        solutionTestCode += `\nconsole.log(${funcName}(${testCase.input}));`;
                    } else if (topic === 'python') {
                        const funcMatch = problem.starterCode.match(/def\s+(\w+)/);
                        const funcName = funcMatch ? funcMatch[1] : '';
                        userTestCode += `\nprint(${funcName}(${testCase.input}))`;
                        solutionTestCode += `\nprint(${funcName}(${testCase.input}))`;
                    }
                    const userRes = await executeCode(topic === 'sql' ? sqlDialect : topic, userTestCode, { pyodide });
                    const solRes = await executeCode(topic === 'sql' ? sqlDialect : topic, solutionTestCode, { pyodide });
                    if (userRes.error) {
                        results.push({ pass: false, error: `Error: ${userRes.error}` });
                        allPassed = false;
                        continue;
                    }
                    const isMatch = areResultsEqual(userRes, solRes, userTestCode, solutionTestCode);
                    results.push({ pass: isMatch, error: isMatch ? null : `Test Case ${i + 1} Failed` });
                    if (!isMatch) allPassed = false;
                }
                setTestResults(results);
                if (allPassed) {
                    await progressApi.markProblemSolved({ userId: 'default-user', topic, problemId });
                    setIsSolved(true);
                    toast.success('Success! All test cases passed.');
                } else {
                    toast.error('Check failed. Please review your logic.');
                }
                return;
            }

            const userResult = await executeCode(topic === 'sql' ? sqlDialect : topic, code, { pyodide });
            if (userResult.error) {
                setTestResults([{ pass: false, error: userResult.error }]);
                setOutput(userResult);
                toast.error('Syntax error detected. Fix your code to proceed.');
                return;
            }
            if (!problem.solution || !problem.solution.trim()) {
                toast.error('Solution not configured. Please use "Set Solution".');
                return;
            }
            const solutionResult = await executeCode(topic === 'sql' ? sqlDialect : topic, problem.solution, { pyodide });
            const isMatch = areResultsEqual(userResult, solutionResult, code, problem.solution);
            if (isMatch) {
                await progressApi.markProblemSolved({ userId: 'default-user', topic, problemId });
                setIsSolved(true);
                setTestResults([{ pass: true, message: "Correct!" }]);
                setOutput(userResult);
                toast.success('Problem solved successfully!');
            } else {
                setTestResults([{ pass: false, error: "Incorrect Output" }]);
                setOutput(userResult);
                toast.error('Incorrect output. Try refining your solution.');
            }
        } catch (e) {
            setTestResults([{ pass: false, error: "Validation Error: " + e.message }]);
        } finally {
            setIsExecuting(false);
        }
    };

    const handleSaveAsSolution = async () => {
        setShowConfirmModal(true);
    };

    const confirmSaveSolution = async () => {
        setShowConfirmModal(false);
        try {
            const response = await problemsApi.updateProblem(problemId, { ...problem, solution: code });
            if (response.success) {
                toast.success('Official solution updated.');
                setProblem({ ...problem, solution: code });
            } else {
                toast.error('Update failed. Please try again.');
            }
        } catch (err) {
            toast.error('System error: Failed to update solution.');
        }
    };

    const handleInputSubmit = (inputValue) => {
        setShowInputModal(false);
        // Handle input: split by newlines, trim?
        // Python input() reads lines. So split by newline is correct.
        // We'll pass the array of lines.
        const inputs = inputValue ? inputValue.split('\n') : [];
        executeWithInputs(inputs);
    };

    const handleReset = () => {
        setCode(problem.starterCode);
        setOutput(null);
        setTestResults([]);
        progressApi.saveUserCode({ userId: 'default-user', topic, problemId, savedCode: problem.starterCode });
    };

    const getDifficultyText = (level) => {
        const text = { 1: 'Easy', 2: 'Medium', 3: 'Hard' };
        return text[level] || 'Unknown';
    };

    const renderOutputContent = () => {
        if (!output) return <div className="output-placeholder">Click &quot;Run Code&quot; to see output...</div>;
        return (
            <div className="output-container">
                {output.error && <div className="error-message">{output.error}</div>}
                {output.message && <div className="success-message">{output.message}</div>}
                {output.html && (
                    <div className="iframe-output-wrapper">
                        <iframe srcDoc={output.html} title="Output" sandbox="allow-scripts allow-same-origin" style={{ width: '100%', height: '100%', border: 'none', background: 'white' }} />
                    </div>
                )}
                {output.columns && output.data && (
                    <div className="table-output-wrapper">
                        <table className="result-table">
                            <thead><tr>{output.columns.map(col => <th key={col}>{col}</th>)}</tr></thead>
                            <tbody>{output.data.map((row, idx) => (<tr key={idx}>{output.columns.map(col => <td key={col}>{row[col]}</td>)}</tr>))}</tbody>
                        </table>
                    </div>
                )}
                {output.output && <pre>{output.output}</pre>}
            </div>
        );
    };

    const relevantTables = (() => {
        if (!['sql', 'mysql', 'postgresql', 'sqlserver'].includes(topic) || !problem) return [];
        const custom = JSON.parse(localStorage.getItem('customSqlTables') || '{}');

        // Build unique set, custom overwriting built-in
        const mergedTables = { ...sqlDatabase };
        Object.entries(custom).forEach(([key, val]) => {
            const existingKey = Object.keys(mergedTables).find(k => k.toLowerCase() === key.toLowerCase());
            if (existingKey) delete mergedTables[existingKey];
            mergedTables[key] = val;
        });

        const tableNames = Object.keys(mergedTables).filter(name =>
            new RegExp(`\\b${name}\\b`, 'i').test(problem.description)
        );

        return tableNames.map(name => ({ name, ...mergedTables[name] }));
    })();

    if (loading) return <div className="loading">Loading...</div>;

    return (
        <div className="problem-detail-container">
            <div className="problem-detail-header">
                <button onClick={() => navigate(`/problems/${topic}`)} className="btn-back">← Back</button>
                <div className="problem-status-indicator">{isSolved && <span className="solved-badge">✓ Solved</span>}</div>
            </div>
            <div className="problem-detail-content">
                <div className="problem-description-panel">
                    <div className="problem-header-info">
                        <h1>{problem.title}</h1>
                        <span className={`difficulty-badge difficulty-${problem.difficulty}`}>{getDifficultyText(problem.difficulty)}</span>
                        <div className="problem-tags-list">
                            {problem.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
                        </div>
                    </div>
                    <div className="problem-description">
                        <h3>Description</h3>
                        <div className="description-text">{problem.description.split('\n').map((line, i) => <p key={i}>{line}</p>)}</div>
                    </div>
                    {relevantTables.length > 0 && (
                        <div className="question-tables-section">
                            {relevantTables.map((table, idx) => (
                                <div key={idx} className="question-table-wrapper">
                                    <h4>Table: {table.name}</h4>
                                    <div className="table-scroll-container">
                                        <table className="question-table">
                                            <thead><tr>{table.columns.map(col => <th key={col}>{col}</th>)}</tr></thead>
                                            <tbody>{table.data.map((row, i) => (<tr key={i}>{table.columns.map(col => <td key={col}>{row[col]}</td>)}</tr>))}</tbody>
                                        </table>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="problem-editor-panel">
                    <div className="editor-header">
                        <h3>Code Editor</h3>
                        {topic === 'sql' && (
                            <select className="dialect-selector" value={sqlDialect} onChange={(e) => setSqlDialect(e.target.value)}>
                                <option value="sql">Standard SQL</option>
                                <option value="mysql">MySQL</option>
                                <option value="postgresql">PostgreSQL</option>
                                <option value="sqlserver">SQL Server</option>
                                <option value="sqlite">SQLite</option>
                                <option value="oracle">Oracle SQL</option>
                            </select>
                        )}
                        <button onClick={handleReset} className="btn-reset">Reset</button>
                    </div>
                    <div className="code-editor-wrapper">
                        <CodeEditor value={code} onChange={handleCodeChange} language={topic === 'sql' ? sqlDialect : topic} />
                    </div>
                    <div className="editor-buttons">
                        <button onClick={handleRun} className="btn-run" disabled={isExecuting}>{isExecuting ? '...' : 'Run'}</button>
                        <button onClick={handleSubmit} className="btn-submit">Submit</button>
                        {(isAuthenticated || !problem.solution || !problem.solution.trim()) && (
                            <button onClick={handleSaveAsSolution} className="btn-save-sol">Set Solution</button>
                        )}
                    </div>
                    <div className="output-panel">
                        <h4>Output</h4>
                        {renderOutputContent()}
                    </div>
                    {testResults.length > 0 && (
                        <div className="test-results">
                            <h4>Results</h4>
                            {testResults.map((res, i) => (
                                <div key={i} className={`test-case ${res.pass ? 'pass' : 'fail'}`}>
                                    Case {i + 1} {res.error}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <ConfirmModal
                isOpen={showConfirmModal}
                title="Set Official Solution"
                message="Are you sure you want to set the current editor code as the official solution for this problem?"
                onConfirm={confirmSaveSolution}
                onCancel={() => setShowConfirmModal(false)}
            />
            <InputModal
                isOpen={showInputModal}
                title="Program Input Required"
                message="Your code uses the input() function. Please provide the inputs below (one per line):"
                onSubmit={handleInputSubmit}
                onCancel={() => setShowInputModal(false)}
            />
        </div>
    );
};

export default ProblemDetail;
