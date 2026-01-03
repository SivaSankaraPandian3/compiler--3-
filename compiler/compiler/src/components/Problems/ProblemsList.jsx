import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useParams, useNavigate } from 'react-router-dom';
import { problemsApi, progressApi } from '../../services/api';
import './ProblemsList.css';

const ProblemsList = () => {
    const { topic } = useParams();
    const navigate = useNavigate();
    const [topicData, setTopicData] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [difficultyFilter, setDifficultyFilter] = useState('all');
    const [solvedCount, setSolvedCount] = useState(0);
    const [solvedIds, setSolvedIds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Modal State
    const [showModal, setShowModal] = useState(false);
    const [newProblem, setNewProblem] = useState({
        title: '',
        description: '',
        difficulty: 1,
        tags: '',
        starterCode: ''
    });

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await problemsApi.getProblemsByTopic(topic);
            if (response.success) {
                const getFormattedTitle = (t) => {
                    const titles = {
                        'c++': 'C++ Problems',
                        'cpp': 'C++ Problems',
                        'sql': 'SQL Problems',
                        'mysql': 'MySQL Problems',
                        'postgresql': 'PostgreSQL Problems',
                        'sqlserver': 'SQL Server Problems',
                        'js': 'JavaScript Problems',
                        'javascript': 'JavaScript Problems'
                    };
                    return titles[t] || (t.charAt(0).toUpperCase() + t.slice(1) + " Problems");
                };

                setTopicData({
                    topic: response.topic,
                    title: getFormattedTitle(response.topic),
                    icon: response.data[0]?.icon || '📝',
                    problems: response.data,
                    totalProblems: response.count
                });
            }

            // Fetch solved status
            const progressResponse = await progressApi.getSolvedCount('default-user', topic);
            if (progressResponse.success) {
                setSolvedCount(progressResponse.solvedCount);
                setSolvedIds(progressResponse.solvedProblemIds || []);
            }
        } catch (err) {
            console.error('Error fetching data:', err);
            const message = err.response?.data?.message || err.message || 'Failed to load problems.';
            setError(message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [topic]);

    if (loading) return <div className="loading">Loading problems...</div>;
    if (error || !topicData) {
        return (
            <div className="problems-container">
                <div className="problems-error">
                    <h2>{error || 'Topic Not Found'}</h2>
                    <p>The topic "{topic}" could not be loaded.</p>
                    <button onClick={() => navigate('/problems')} className="btn-primary">
                        Back to Topics
                    </button>
                </div>
            </div>
        );
    }

    const isProblemSolved = (id) => solvedIds.includes(id);

    const filteredProblems = topicData.problems.filter(problem => {
        const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'all' ||
            (statusFilter === 'solved' && isProblemSolved(problem._id)) ||
            (statusFilter === 'unsolved' && !isProblemSolved(problem._id));
        const matchesDifficulty = difficultyFilter === 'all' ||
            problem.difficulty === parseInt(difficultyFilter);

        return matchesSearch && matchesStatus && matchesDifficulty;
    });

    const handleProblemClick = (problemId) => {
        navigate(`/problems/${topic}/${problemId}`);
    };

    const handleAddQuestion = async (e) => {
        e.preventDefault();
        try {
            const problem = {
                topic: topic,
                title: newProblem.title,
                description: newProblem.description,
                difficulty: parseInt(newProblem.difficulty),
                tags: newProblem.tags.split(',').map(tag => tag.trim()),
                starterCode: newProblem.starterCode || '// Write your code here'
            };

            await problemsApi.createProblem(problem);
            await fetchData(); // Refresh data
            setShowModal(false);
            setNewProblem({
                title: '',
                description: '',
                difficulty: 1,
                tags: '',
                starterCode: ''
            });
            toast.success('Question added successfully!');
        } catch (err) {
            console.error('Error adding problem:', err);
            toast.error('Failed to add question');
        }
    };

    const handleDelete = async (e, problemId) => {
        e.stopPropagation();
        if (window.confirm('Are you sure you want to delete this problem?')) {
            try {
                await problemsApi.deleteProblem(problemId);
                await fetchData();
            } catch (err) {
                console.error('Error deleting problem:', err);
                toast.error('Failed to delete problem');
            }
        }
    };

    return (
        <div className="problems-container">
            <div className="problems-header-minimal">
                <div className="header-left">
                    <h1 className="minimal-title">{topicData.title}</h1>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <p className="minimal-stats">You have solved {solvedCount} / {topicData.totalProblems} Problems</p>
                        {['python', 'css', 'react', 'angular', 'html', 'c++', 'java', 'sql', 'javascript', 'mysql', 'postgresql', 'sqlserver', 'sqlite', 'oracle'].includes(topic) && (
                            <button
                                onClick={() => navigate(`/quiz/${topic}`)}
                                className="quiz-button"
                                style={{
                                    padding: '8px 16px',
                                    backgroundColor: '#22c55e',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    fontWeight: '500',
                                    transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#16a34a'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#22c55e'}
                            >
                                📝 Take {
                                    topic === 'c++' ? 'C++' :
                                        topic === 'html' ? 'HTML' :
                                            topic === 'css' ? 'CSS' :
                                                topic === 'sql' ? 'SQL' :
                                                    topic === 'mysql' ? 'MySQL' :
                                                        topic === 'postgresql' ? 'PostgreSQL' :
                                                            topic === 'sqlserver' ? 'SQL Server' :
                                                                topic === 'sqlite' ? 'SQLite' :
                                                                    topic === 'oracle' ? 'Oracle' :
                                                                        topic.charAt(0).toUpperCase() + topic.slice(1)
                                } Quiz
                            </button>
                        )}
                    </div>
                </div>

                <div className="header-right-actions">
                    <div className="minimal-search-box">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="minimal-search-input"
                        />
                        <span className="minimal-search-icon">🔍</span>
                    </div>

                    <div className="minimal-filter-group">
                        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="minimal-select">
                            <option value="all">Status</option>
                            <option value="solved">Solved</option>
                            <option value="unsolved">Unsolved</option>
                        </select>
                    </div>

                    <div className="minimal-filter-group">
                        <select value={difficultyFilter} onChange={(e) => setDifficultyFilter(e.target.value)} className="minimal-select">
                            <option value="all">Difficulty Level</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="problems-table-container">
                <table className="problems-table">
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Topic name</th>
                            <th>Status</th>
                            <th>Difficulty Level</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProblems.map((problem, index) => {
                            const solved = isProblemSolved(problem._id);
                            return (
                                <tr
                                    key={problem._id}
                                    onClick={() => handleProblemClick(problem._id)}
                                    className="problem-row"
                                >
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="problem-title-cell">
                                            <span className="problem-title">{problem.title}</span>
                                            <div className="problem-tags">
                                                {problem.tags.map((tag, i) => (
                                                    <span key={i} className="tag">{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`status-badge ${solved ? 'solved' : 'unsolved'}`}>
                                            {solved ? 'Solved' : 'Unsolved'}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={`difficulty-badge difficulty-${problem.difficulty}`}>
                                            {problem.difficulty}
                                        </span>
                                    </td>
                                    <td>
                                        <button
                                            className="btn-delete"
                                            onClick={(e) => handleDelete(e, problem._id)}
                                            title="Delete Problem"
                                        >
                                            🗑️
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                {filteredProblems.length === 0 && (
                    <div className="no-results">
                        <p>No problems found matching your filters.</p>
                    </div>
                )}
            </div>

            {/* Add Question Modal */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Add New Question</h2>
                        <form onSubmit={handleAddQuestion}>
                            <div className="form-group">
                                <label>Title:</label>
                                <input
                                    type="text"
                                    required
                                    value={newProblem.title}
                                    onChange={(e) => setNewProblem({ ...newProblem, title: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label>Description:</label>
                                <textarea
                                    required
                                    value={newProblem.description}
                                    onChange={(e) => setNewProblem({ ...newProblem, description: e.target.value })}
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label>Difficulty:</label>
                                <select
                                    value={newProblem.difficulty}
                                    onChange={(e) => setNewProblem({ ...newProblem, difficulty: e.target.value })}
                                >
                                    <option value="1">Easy</option>
                                    <option value="2">Medium</option>
                                    <option value="3">Hard</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Tags (comma separated):</label>
                                <input
                                    type="text"
                                    placeholder="e.g., arrays, sorting"
                                    value={newProblem.tags}
                                    onChange={(e) => setNewProblem({ ...newProblem, tags: e.target.value })}
                                />
                            </div>
                            <div className="form-buttons">
                                <button type="submit" className="btn-primary">Add Question</button>
                                <button type="button" onClick={() => setShowModal(false)} className="btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProblemsList;
