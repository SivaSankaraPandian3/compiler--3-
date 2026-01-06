import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { problemsApi } from '../../services/api';
import toast from 'react-hot-toast';
import * as XLSX from 'xlsx';
import ConfirmModal from '../Common/ConfirmModal';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('problems');
    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem('adminAuth') === 'true');
    const [loginData, setLoginData] = useState({ id: '', password: '' });
    const [isBulkUploading, setIsBulkUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState({ current: 0, total: 0 });
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [problemToDelete, setProblemToDelete] = useState(null);

    // New Problem Form State
    const [newProblem, setNewProblem] = useState({
        topic: 'sql',
        title: '',
        description: '',
        difficulty: 1,
        tags: '',
        starterCode: '',
        solution: '',
        hints: ''
    });

    // New Table Form State (for SQL)
    const [newTable, setNewTable] = useState({
        name: '',
        columns: '',
        data: ''
    });

    const topics = ['sql', 'python', 'java', 'javascript', 'html', 'css', 'c++', 'react', 'angular'];

    const fetchProblems = async (topic = newProblem.topic) => {
        setLoading(true);
        try {
            const response = await problemsApi.getProblemsByTopic(topic);
            if (response.success) {
                setProblems(response.data || []);
            }
        } catch (error) {
            console.error('Error fetching problems:', error);
            setProblems([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isAuthenticated && activeTab === 'problems') {
            fetchProblems(newProblem.topic);
            setSearchTerm(''); // Clear search when switching topics
        }
    }, [activeTab, newProblem.topic, isAuthenticated]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (loginData.id === 'Urbancode' && loginData.password === 'Codeurban@123') {
            setIsAuthenticated(true);
            sessionStorage.setItem('adminAuth', 'true');
            toast.success('Welcome Back, Admin!');
        } else {
            toast.error('Invalid Credentials');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem('adminAuth');
        toast.success('Logged out');
    };

    const handleAddProblem = async (e) => {
        e.preventDefault();
        try {
            const problemData = {
                ...newProblem,
                tags: newProblem.tags.split(',').map(t => t.trim()).filter(t => t),
                hints: newProblem.hints.split('\n').map(h => h.trim()).filter(h => h),
                testCases: [] // Can be expanded later
            };
            const response = await problemsApi.createProblem(problemData);
            if (response.success) {
                toast.success('Problem created successfully!');
                setNewProblem({
                    topic: newProblem.topic,
                    title: '',
                    description: '',
                    difficulty: 1,
                    tags: '',
                    starterCode: '',
                    solution: '',
                    hints: ''
                });
                fetchProblems();
            }
        } catch (error) {
            toast.error('Failed to create problem');
        }
    };

    const handleDeleteProblem = (id) => {
        setProblemToDelete(id);
        setShowDeleteModal(true);
    };

    const confirmDeleteProblem = async () => {
        if (!problemToDelete) return;
        try {
            const response = await problemsApi.deleteProblem(problemToDelete);
            if (response.success) {
                toast.success('Problem deleted');
                fetchProblems();
            }
        } catch (error) {
            toast.error('Delete failed');
        } finally {
            setShowDeleteModal(false);
            setProblemToDelete(null);
        }
    };

    const handleAddTable = (e) => {
        e.preventDefault();
        try {
            // Here we would ideally tell the backend or a central state to add this table.
            // For now, we'll simulate it by saving to localStorage or just showing success.
            // In a real app, this would be a POST /api/sql/tables

            // Validate JSON data
            const parsedData = JSON.parse(newTable.data);
            const columns = newTable.columns.split(',').map(c => c.trim());

            // Store in localStorage for the session (to be picked up by codeExecutor)
            const customTables = JSON.parse(localStorage.getItem('customSqlTables') || '{}');
            customTables[newTable.name] = {
                columns,
                data: parsedData
            };
            localStorage.setItem('customSqlTables', JSON.stringify(customTables));

            toast.success(`Table "${newTable.name}" created manually!`);
            setNewTable({ name: '', columns: '', data: '' });

            // Dispatch event to notify codeExecutor
            window.dispatchEvent(new Event('sql-table-added'));
        } catch (error) {
            toast.error('Invalid Table Data. Please check your JSON format.');
        }
    };

    const handleExcelUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = async (evt) => {
            try {
                const bstr = evt.target.result;
                const wb = XLSX.read(bstr, { type: 'binary' });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = XLSX.utils.sheet_to_json(ws);

                if (data.length === 0) {
                    toast.error('Excel file is empty');
                    return;
                }

                setIsBulkUploading(true);
                setUploadProgress({ current: 0, total: data.length });

                let successCount = 0;
                let failCount = 0;

                for (let i = 0; i < data.length; i++) {
                    const row = data[i];
                    try {
                        const problemData = {
                            topic: String(row.topic || 'sql').toLowerCase(),
                            title: String(row.title || ''),
                            description: String(row.description || ''),
                            difficulty: parseInt(row.difficulty) || 1,
                            tags: row.tags ? String(row.tags).split(',').map(t => t.trim()).filter(t => t) : [],
                            hints: row.hints ? String(row.hints).split('\n').map(h => h.trim()).filter(h => h) : [],
                            starterCode: String(row.starterCode || ''),
                            solution: String(row.solution || ''),
                            testCases: []
                        };

                        if (!problemData.title || !problemData.description) {
                            failCount++;
                            continue;
                        }

                        const response = await problemsApi.createProblem(problemData);
                        if (response.success) {
                            successCount++;
                        } else {
                            failCount++;
                        }
                    } catch (err) {
                        failCount++;
                    }
                    setUploadProgress(prev => ({ ...prev, current: i + 1 }));
                }

                toast.success(`Upload complete! Success: ${successCount}, Failed: ${failCount}`);
                fetchProblems();
                e.target.value = ''; // Reset file input
            } catch (error) {
                toast.error('Error reading Excel file');
                console.error(error);
            } finally {
                setIsBulkUploading(false);
            }
        };
        reader.readAsBinaryString(file);
    };

    if (!isAuthenticated) {
        return (
            <div className="admin-login-container">
                <div className="login-card">
                    <div className="login-header">
                        <h1>Admin Login</h1>
                        <p>Access management portal</p>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label>Login ID</label>
                            <input
                                type="text"
                                required
                                value={loginData.id}
                                onChange={(e) => setLoginData({ ...loginData, id: e.target.value })}
                                placeholder="Enter ID"
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                required
                                value={loginData.password}
                                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                placeholder="Enter Password"
                            />
                        </div>
                        <button type="submit" className="admin-btn primary">Login</button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-dashboard">
            <div className="admin-header">
                <button className="logout-btn" onClick={handleLogout}>🚪 Logout</button>
                <h1>Admin Access</h1>
                <p>Manage questions and SQL database components</p>
            </div>

            <div className="admin-tabs">
                <button
                    className={activeTab === 'problems' ? 'active' : ''}
                    onClick={() => setActiveTab('problems')}
                >
                    📝 Manage Questions
                </button>
                <button
                    className={activeTab === 'sql' ? 'active' : ''}
                    onClick={() => setActiveTab('sql')}
                >
                    📊 SQL Tables
                </button>
            </div>

            <div className="admin-content">
                {activeTab === 'problems' && (
                    <div className="tab-pane">
                        <div className="admin-grid">
                            <div className="form-section card">
                                <h2>Create New Question</h2>
                                <form onSubmit={handleAddProblem}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Topic</label>
                                            <select
                                                value={newProblem.topic}
                                                onChange={(e) => setNewProblem({ ...newProblem, topic: e.target.value })}
                                            >
                                                {topics.map(t => <option key={t} value={t}>{t.toUpperCase()}</option>)}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Difficulty</label>
                                            <select
                                                value={newProblem.difficulty}
                                                onChange={(e) => setNewProblem({ ...newProblem, difficulty: e.target.value })}
                                            >
                                                <option value="1">1 (Easy)</option>
                                                <option value="2">2 (Medium)</option>
                                                <option value="3">3 (Hard)</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            required
                                            value={newProblem.title}
                                            onChange={(e) => setNewProblem({ ...newProblem, title: e.target.value })}
                                            placeholder="Problem Title"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea
                                            required
                                            rows="4"
                                            value={newProblem.description}
                                            onChange={(e) => setNewProblem({ ...newProblem, description: e.target.value })}
                                            placeholder="HTML/Markdown supported"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Starter Code</label>
                                        <textarea
                                            rows="3"
                                            className="code-textarea"
                                            value={newProblem.starterCode}
                                            onChange={(e) => setNewProblem({ ...newProblem, starterCode: e.target.value })}
                                            placeholder="Initial code template"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Solution Code</label>
                                        <textarea
                                            required
                                            rows="4"
                                            className="code-textarea"
                                            value={newProblem.solution}
                                            onChange={(e) => setNewProblem({ ...newProblem, solution: e.target.value })}
                                            placeholder="The correct solution code"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Hints (One per line)</label>
                                        <textarea
                                            rows="2"
                                            value={newProblem.hints}
                                            onChange={(e) => setNewProblem({ ...newProblem, hints: e.target.value })}
                                            placeholder="Hint 1&#10;Hint 2"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Tags (Comma separated)</label>
                                        <input
                                            type="text"
                                            value={newProblem.tags}
                                            onChange={(e) => setNewProblem({ ...newProblem, tags: e.target.value })}
                                            placeholder="basics, sql, join"
                                        />
                                    </div>
                                    <button type="submit" className="admin-btn primary">Create Question</button>
                                </form>

                                <div className="bulk-upload-section">
                                    <h3 className="section-subtitle">Bulk Upload (Excel)</h3>
                                    <div className="upload-box">
                                        <input
                                            type="file"
                                            accept=".xlsx, .xls"
                                            onChange={handleExcelUpload}
                                            disabled={isBulkUploading}
                                            id="excel-upload"
                                        />
                                        <label htmlFor="excel-upload" className={`upload-label ${isBulkUploading ? 'disabled' : ''}`}>
                                            {isBulkUploading ? (
                                                `Uploading... ${uploadProgress.current}/${uploadProgress.total}`
                                            ) : (
                                                '📁 Choose Excel File'
                                            )}
                                        </label>
                                        <p className="upload-hint">Headers: topic, title, description, difficulty, tags, starterCode, solution, hints</p>
                                    </div>
                                    {isBulkUploading && (
                                        <div className="progress-bar-container">
                                            <div
                                                className="progress-bar-fill"
                                                style={{ width: `${(uploadProgress.current / uploadProgress.total) * 100}%` }}
                                            ></div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="list-section card">
                                <h2>Question List ({newProblem.topic.toUpperCase()})</h2>
                                <div className="search-box">
                                    <input
                                        type="text"
                                        placeholder="Search problems..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                {loading ? (
                                    <p>Loading...</p>
                                ) : (
                                    <div className="admin-list">
                                        {problems
                                            .filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
                                            .map(prob => (
                                                <div key={prob._id} className="admin-list-item">
                                                    <div className="item-info">
                                                        <h3>{prob.title}</h3>
                                                        <span className={`diff diff-${prob.difficulty}`}>Lvl {prob.difficulty}</span>
                                                    </div>
                                                    <div className="item-actions">
                                                        <button
                                                            className="admin-btn view"
                                                            onClick={() => navigate(`/problems/${prob.topic}/${prob._id}`)}
                                                        >
                                                            View
                                                        </button>
                                                        <button
                                                            className="admin-btn edit"
                                                            onClick={() => navigate(`/admin/edit/${prob._id}`)}
                                                        >
                                                            Edit
                                                        </button>
                                                        <button
                                                            className="admin-btn danger"
                                                            onClick={() => handleDeleteProblem(prob._id)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'sql' && (
                    <div className="tab-pane">
                        <div className="admin-grid">
                            <div className="form-section card">
                                <h2>Create Manual Table</h2>
                                <p className="hint">This table will be added to the live SQL database environment.</p>
                                <form onSubmit={handleAddTable}>
                                    <div className="form-group">
                                        <label>Table Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={newTable.name}
                                            onChange={(e) => setNewTable({ ...newTable, name: e.target.value })}
                                            placeholder="e.g. Products"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Columns (Comma separated)</label>
                                        <input
                                            type="text"
                                            required
                                            value={newTable.columns}
                                            onChange={(e) => setNewTable({ ...newTable, columns: e.target.value })}
                                            placeholder="id, name, price, stock"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Demo Data (JSON Array)</label>
                                        <textarea
                                            required
                                            rows="10"
                                            className="code-textarea"
                                            value={newTable.data}
                                            onChange={(e) => setNewTable({ ...newTable, data: e.target.value })}
                                            placeholder='[{"id":1, "name":"Item A", "price":100}, ...]'
                                        />
                                    </div>
                                    <button type="submit" className="admin-btn primary">Add Table to SQL Engine</button>
                                </form>
                            </div>
                            <div className="info-section card">
                                <h2>How it works</h2>
                                <ul>
                                    <li><strong>Questions:</strong> Saved to MongoDB and appear in the Problems list.</li>
                                    <li><strong>SQL Tables:</strong> Dynamically injected into the SQL.js engine.</li>
                                    <li><strong>Validation:</strong> Ensure your JSON data matches the column names provided.</li>
                                </ul>
                                <div className="warning-box">
                                    <p>⚠️ In this demo, "Manual Tables" are session-based. For persistence, they should be added to the backend schema.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <ConfirmModal
                isOpen={showDeleteModal}
                title="Delete Problem"
                message="Are you sure you want to permanently delete this problem? This action cannot be undone."
                onConfirm={confirmDeleteProblem}
                onCancel={() => setShowDeleteModal(false)}
            />
        </div>
    );
};

export default AdminDashboard;
