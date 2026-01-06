import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { problemsApi } from '../../services/api';
import toast from 'react-hot-toast';
import './EditProblem.css';

const EditProblem = () => {
    const { problemId } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [problem, setProblem] = useState({
        topic: '',
        title: '',
        description: '',
        difficulty: 1,
        tags: '',
        starterCode: '',
        solution: '',
        hints: ''
    });

    useEffect(() => {
        const fetchProblem = async () => {
            try {
                setLoading(true);
                const response = await problemsApi.getProblemById(problemId);
                if (response.success) {
                    const data = response.data;
                    setProblem({
                        topic: data.topic || '',
                        title: data.title || '',
                        description: data.description || '',
                        difficulty: data.difficulty || 1,
                        tags: Array.isArray(data.tags) ? data.tags.join(', ') : '',
                        starterCode: data.starterCode || '',
                        solution: data.solution || '',
                        hints: Array.isArray(data.hints) ? data.hints.join('\n') : ''
                    });
                } else {
                    toast.error('Failed to load problem');
                }
            } catch (error) {
                console.error('Error fetching problem:', error);
                toast.error('Error loading problem');
            } finally {
                setLoading(false);
            }
        };
        fetchProblem();
    }, [problemId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const problemData = {
                ...problem,
                tags: problem.tags.split(',').map(t => t.trim()).filter(t => t),
                hints: problem.hints.split('\n').map(h => h.trim()).filter(h => h)
            };

            const response = await problemsApi.updateProblem(problemId, problemData);
            if (response.success) {
                toast.success('Problem updated successfully!');
                navigate('/admin');
            } else {
                toast.error('Update failed: ' + response.message);
            }
        } catch (error) {
            console.error('Error updating problem:', error);
            toast.error('Failed to update problem');
        }
    };

    if (loading) {
        return <div className="edit-problem-loading">Loading problem...</div>;
    }

    return (
        <div className="edit-problem-container">
            <div className="edit-problem-header">
                <button onClick={() => navigate('/admin')} className="btn-back">
                    ← Back to Admin
                </button>
                <h1>Edit Problem</h1>
            </div>

            <form onSubmit={handleSubmit} className="edit-problem-form">
                <div className="form-row">
                    <div className="form-group">
                        <label>Topic</label>
                        <select
                            value={problem.topic}
                            onChange={(e) => setProblem({ ...problem, topic: e.target.value })}
                            required
                        >
                            <option value="sql">SQL</option>
                            <option value="python">Python</option>
                            <option value="java">Java</option>
                            <option value="javascript">JavaScript</option>
                            <option value="html">HTML</option>
                            <option value="css">CSS</option>
                            <option value="c++">C++</option>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Difficulty</label>
                        <select
                            value={problem.difficulty}
                            onChange={(e) => setProblem({ ...problem, difficulty: parseInt(e.target.value) })}
                            required
                        >
                            <option value={1}>1 (Easy)</option>
                            <option value={2}>2 (Medium)</option>
                            <option value={3}>3 (Hard)</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        value={problem.title}
                        onChange={(e) => setProblem({ ...problem, title: e.target.value })}
                        required
                        placeholder="Problem title"
                    />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        rows="6"
                        value={problem.description}
                        onChange={(e) => setProblem({ ...problem, description: e.target.value })}
                        required
                        placeholder="Problem description"
                    />
                </div>

                <div className="form-group">
                    <label>Tags (comma-separated)</label>
                    <input
                        type="text"
                        value={problem.tags}
                        onChange={(e) => setProblem({ ...problem, tags: e.target.value })}
                        placeholder="e.g., arrays, loops, strings"
                    />
                </div>

                <div className="form-group">
                    <label>Starter Code</label>
                    <textarea
                        rows="8"
                        className="code-textarea"
                        value={problem.starterCode}
                        onChange={(e) => setProblem({ ...problem, starterCode: e.target.value })}
                        placeholder="Initial code template for students"
                    />
                </div>

                <div className="form-group">
                    <label>Solution Code</label>
                    <textarea
                        rows="8"
                        className="code-textarea"
                        value={problem.solution}
                        onChange={(e) => setProblem({ ...problem, solution: e.target.value })}
                        placeholder="Complete solution code"
                    />
                </div>

                <div className="form-group">
                    <label>Hints (one per line)</label>
                    <textarea
                        rows="4"
                        value={problem.hints}
                        onChange={(e) => setProblem({ ...problem, hints: e.target.value })}
                        placeholder="Hint 1&#10;Hint 2&#10;Hint 3"
                    />
                </div>

                <div className="form-actions">
                    <button type="button" onClick={() => navigate('/admin')} className="btn-cancel">
                        Cancel
                    </button>
                    <button type="submit" className="btn-save">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditProblem;
