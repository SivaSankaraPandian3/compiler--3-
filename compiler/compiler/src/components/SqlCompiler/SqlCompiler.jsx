import React, { useState } from "react";
import Editor from "../Editor.jsx";
import { sqlDatabase, executeSQL } from "../../utils/codeExecutor";
import "./SqlCompiler.css";

const SqlCompiler = () => {
    const [sql, setSql] = useState(`SELECT first_name, age
FROM Customers;`);
    const [output, setOutput] = useState([]);
    const [activeTable, setActiveTable] = useState("Customers");

    // Use the shared database

    const handleRun = async () => {
        const result = await executeSQL(sql);
        setOutput(result);
    };


    const renderTable = (tableName, tableData) => {
        return (
            <div className="table-viewer" key={tableName}>
                <h3>{tableName}</h3>
                <table>
                    <thead>
                        <tr>
                            {tableData.columns.map(col => (
                                <th key={col}>{col}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.data.map((row, idx) => (
                            <tr key={idx}>
                                {tableData.columns.map(col => (
                                    <td key={col}>{row[col]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div className="sql-compiler-container">
            {/* Left Sidebar - Database Schema */}
            <div className="sql-sidebar">
                <div className="schema-header">
                    <h3>Available Tables</h3>
                </div>
                <div className="schema-tables">
                    {Object.keys(sqlDatabase).map(tableName => (
                        <div
                            key={tableName}
                            className={`table-item ${activeTable === tableName ? 'active' : ''}`}
                            onClick={() => setActiveTable(tableName)}
                        >
                            <div className="table-name">📊 {tableName} [-]</div>
                            {activeTable === tableName && (
                                <div className="table-columns">
                                    {sqlDatabase[tableName].columns.map(col => {
                                        // Detect column type
                                        const isId = col.includes('id');
                                        const type = isId ? '[integer]' : '[varchar(100)]';
                                        return (
                                            <div key={col} className="column-item">
                                                {col} <span className="column-type">{type}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Middle - SQL Editor */}
            <div className="sql-editor-section">
                <div className="sql-header">
                    <div className="sql-tabs">
                        <div className="sql-tab active">Input</div>
                    </div>
                    <button className="run-sql-button" onClick={handleRun}>
                        Run SQL
                    </button>
                </div>

                <div className="sql-editor-wrapper">
                    <div className="editor-instructions">
                        <p>-- Online SQL Editor to Run SQL Online.</p>
                        <p style={{ color: '#ff6b6b' }}>
                            Use the editor to create new tables, insert data and all other SQL operations.
                        </p>
                    </div>
                    <Editor
                        label=""
                        value={sql}
                        onChange={setSql}
                        language="sql"
                    />
                </div>

                <div className="sql-output-section">
                    <div className="output-header">Output</div>
                    <div className="output-content">
                        {output.error ? (
                            <div className="error-message">{output.error}</div>
                        ) : output.message ? (
                            <div className="success-message">{output.message}</div>
                        ) : output.data ? (
                            <table className="result-table">
                                <thead>
                                    <tr>
                                        {output.columns.map(col => (
                                            <th key={col}>{col}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {output.data.map((row, idx) => (
                                        <tr key={idx}>
                                            {output.columns.map(col => (
                                                <td key={col}>{row[col]}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className="no-output">Click "Run SQL" to execute query</div>
                        )}
                    </div>
                </div>
            </div>

            {/* Right Sidebar - Available Tables Data */}
            <div className="sql-tables-panel">
                <div className="tables-header">
                    <h3>Available Tables</h3>
                </div>
                <div className="tables-content">
                    {Object.keys(sqlDatabase).map(tableName =>
                        renderTable(tableName, sqlDatabase[tableName])
                    )}
                </div>
            </div>
        </div>
    );
};

export default SqlCompiler;
