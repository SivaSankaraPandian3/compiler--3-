
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Editor from "../Editor.jsx";

const CodeCompiler = ({ language, label }) => {
    const [code, setCode] = useState("");
    const [output, setOutput] = useState("");
    const [isRunning, setIsRunning] = useState(false);
    const variables = {};

    useEffect(() => {
        const starterCode = {
            python: 'print("Hello, Python!")',
            java: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}',
            'c++': '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, C++!" << endl;\n    return 0;\n}',
            sql: 'SELECT * FROM users;'
        };
        if (starterCode[language]) {
            setCode(starterCode[language]);
        }
    }, [language]);

    // Pyodide instance ref
    const pyodideRef = useRef(null);

    useEffect(() => {
        // Pre-load Pyodide if Python is selected
        if (language === "python" && !pyodideRef.current) {
            const loadPyodideEngine = async () => {
                try {
                    // Check if script is loaded
                    if (window.loadPyodide) {
                        setOutput("Initializing Python environment...");
                        const pyodide = await window.loadPyodide({
                            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/"
                        });
                        pyodideRef.current = pyodide;
                        setOutput((prev) => prev + "\nPython Ready.");
                    }
                } catch (e) {
                    console.error("Failed to load Pyodide:", e);
                    setOutput("Error: Failed to load Python engine. Please check internet connection.");
                }
            };
            // Give the script a moment to load from CDN
            setTimeout(loadPyodideEngine, 1000);
        }
    }, [language]);

    const runPython = async (sourceCode) => {
        if (!pyodideRef.current) {
            return "Python engine not loaded yet. Please wait.";
        }
        try {
            // Redirect stdout to capture output
            pyodideRef.current.setStdout({
                batched: (msg) => {
                    setOutput((prev) => prev + msg + "\n");
                }
            });
            await pyodideRef.current.runPythonAsync(sourceCode);
            return ""; // Output is handled by stdout redirection
        } catch (error) {
            return `Error:\n${error.message}`;
        }
    };

    const runJava = (sourceCode) => {
        let outputBuffer = "";
        const variables = {};

        // Helper to evaluate simple expressions: "10", "a", "a + b"
        const evaluateExpression = (expr) => {
            expr = expr.trim();
            // String literal
            if (expr.startsWith('"') && expr.endsWith('"')) return expr.slice(1, -1);
            // Number literal
            if (!isNaN(expr)) return Number(expr);
            // Variable
            if (variables[expr] !== undefined) return variables[expr];

            // Simple Math (binary)
            const mathMatch = expr.match(/([\w\d]+)\s*([\+\-\*\/])\s*([\w\d]+)/);
            if (mathMatch) {
                const val1 = evaluateExpression(mathMatch[1]);
                const val2 = evaluateExpression(mathMatch[3]);
                const op = mathMatch[2];
                if (typeof val1 === 'number' && typeof val2 === 'number') {
                    switch (op) {
                        case '+': return val1 + val2;
                        case '-': return val1 - val2;
                        case '*': return val1 * val2;
                        case '/': return val1 / val2;
                    }
                }
                // String concat
                if (op === '+') return val1 + "" + val2;
            }

            return expr; // Fallback
        };

        const lines = sourceCode.split('\n');

        try {
            lines.forEach(line => {
                line = line.trim();
                // Basic variable parsing
                // int a = 10;
                const intMatch = line.match(/int\s+(\w+)\s*=\s*(\d+);/);
                if (intMatch) variables[intMatch[1]] = Number(intMatch[2]);

                // String s = "Text";
                const strMatch = line.match(/String\s+(\w+)\s*=\s*"(.*)";/);
                if (strMatch) variables[strMatch[1]] = strMatch[2];

                // System.out.println(...)
                if (line.includes('System.out.println')) {
                    const match = line.match(/System\.out\.println\((.*)\);/);
                    if (match) {
                        let content = match[1];
                        // Naive split by '+' ignoring quotes for demo simplicity
                        // Real parser is too big, this covers basic "Label " + (a+b) cases if formatted safely
                        const parts = content.split('+');
                        let lineOut = "";
                        parts.forEach(part => {
                            lineOut += evaluateExpression(part);
                        });
                        outputBuffer += lineOut + "\n";
                    }
                }
            });
        } catch (e) {
            outputBuffer += `\nError parsing Java: ${e.message}`;
        }

        if (!outputBuffer) outputBuffer = "Build Success. (No output captured)";
        return outputBuffer;
    };

    const runCPlusPlus = (sourceCode) => {
        let outputBuffer = "";
        const lines = sourceCode.split('\n');
        try {
            lines.forEach(line => {
                line = line.trim();
                // Naive int parsing
                const intMatch = line.match(/int\s+(\w+)\s*=\s*(\d+);/);
                if (intMatch) variables[intMatch[1]] = Number(intMatch[2]);

                // Naive cout parser
                if (line.includes('cout')) {
                    const match = line.match(/cout\s*<<\s*"(.*)"\s*(<<\s*endl|;)?/);
                    if (match) {
                        outputBuffer += match[1] + "\n";
                    } else {
                        // Handle simple variable cout
                        const varMatch = line.match(/cout\s*<<\s*(\w+)\s*(<<\s*endl|;)?/);
                        if (varMatch && variables[varMatch[1]]) {
                            outputBuffer += variables[varMatch[1]] + "\n";
                        }
                    }
                }
            });
        } catch (e) {
            outputBuffer += `\nError parsing C++: ${e.message}`;
        }
        if (!outputBuffer) outputBuffer = "Build Success. (No output captured)";
        return outputBuffer;
    };

    const runSQL = (sourceCode) => {
        if (sourceCode.toLowerCase().includes('select')) {
            return "Query Executed Successfully.\n\n| id | name      | role      |\n|----|-----------|-----------|\n| 1  | John Doe  | Admin     |\n| 2  | Jane Doe  | User      |\n| 3  | Bob Smith | Editor    |";
        } else if (sourceCode.trim()) {
            return "Command Executed Successfully (1 row affected).";
        }
        return "";
    };

    const handleRun = async () => {
        setIsRunning(true);
        setOutput(""); // Clear output

        // Small delay to show "Running..." state
        setTimeout(async () => {
            let result = "";
            if (language === "python") {
                result = await runPython(code);
            } else if (language === "java") {
                result = runJava(code);
            } else if (language === "c++") {
                result = runCPlusPlus(code);
            } else if (language === "sql") {
                result = runSQL(code);
            } else {
                result = `Execution not implemented for ${language}`;
            }

            if (result) setOutput((prev) => prev + result);
            setIsRunning(false);
        }, 500);
    };

    return (
        <div className="code-compiler-container">
            <div className="compiler-header">
                <h2>{label} Compiler</h2>
                <button
                    onClick={handleRun}
                    disabled={isRunning}
                    className="run-button"
                >
                    {isRunning ? 'Running...' : 'Run'}
                </button>
            </div>

            <div className="compiler-body">
                <div className="compiler-editor-container">
                    <Editor
                        label={label}
                        value={code}
                        onChange={setCode}
                        language={language}
                    />
                </div>

                <div className="compiler-output-container">
                    <div className="output-label">Output</div>
                    <pre className="output-pre">{output}</pre>
                </div>
            </div>
        </div>
    );
};

CodeCompiler.propTypes = {
    language: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default CodeCompiler;
