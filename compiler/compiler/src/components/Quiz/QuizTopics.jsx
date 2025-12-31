import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizzesApi } from '../../services/api';
import './QuizTopics.css';

// Import icons (using react-icons for consistency with Problems page)
import { FaPython, FaDatabase, FaJs, FaReact, FaHtml5, FaJava, FaCss3Alt } from 'react-icons/fa';

const QuizTopics = () => {
    const navigate = useNavigate();
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Metadata for topics (icons and colors) to match Problems page
    const topicsMetadata = {
        python: { icon: <FaPython />, color: '#3776AB', title: 'Python Programming' },
        java: { icon: <FaJava />, color: '#007396', title: 'Java Programming' },
        'c++': { icon: <FaDatabase />, color: '#00599C', title: 'C++ Programming' },
        html: { icon: <FaHtml5 />, color: '#E34F26', title: 'HTML & Web Development' },
        sql: { icon: <FaDatabase />, color: '#4a5568', title: 'SQL & Databases' },
        react: { icon: <FaReact />, color: '#61DAFB', title: 'React Framework' },
        javascript: { icon: <FaJs />, color: '#F7DF1E', title: 'Javascript Programming' },
        js: { icon: <FaJs />, color: '#F7DF1E', title: 'Javascript Programming' },
        css: { icon: <FaCss3Alt />, color: '#1572B6', title: 'CSS Design' },
    };

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                setLoading(true);
                const response = await quizzesApi.getAllTopics();
                if (response.success) {
                    // Merge API data with metadata
                    const mergedTopics = response.data.map(topic => ({
                        ...topic,
                        ...(topicsMetadata[topic.id] || { icon: <FaDatabase />, color: '#4a5568', title: topic.title })
                    }));
                    setTopics(mergedTopics);
                }
            } catch (err) {
                console.error('Error fetching quiz topics:', err);
                setError('Failed to load quizzes.');
            } finally {
                setLoading(false);
            }
        };
        fetchTopics();
    }, []);

    const handleTopicClick = (topicId) => {
        navigate(`/quiz/${topicId}/beginner`);
    };

    if (loading) return <div className="loading">Loading quizzes...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="quiz-topics-page">
            <div className="topics-header-section">
                <h1>Programming Quizzes</h1>
                <p>Test your knowledge with topic-based quizzes</p>
            </div>

            <div className="quiz-topics-container">
                <div className="topics-grid">
                    {topics.map((topic) => (
                        <div
                            key={topic.id}
                            className="topic-card"
                            onClick={() => handleTopicClick(topic.id)}
                        >
                            <div className="topic-icon">
                                {topic.icon}
                            </div>
                            <div className="topic-content">
                                <h3>{topic.title}</h3>
                                <div className="topic-stats">
                                    <span>{topic.questionCount} Questions</span>
                                    <span className="solve-status">Beginner</span>
                                </div>
                                <div className="solve-link">
                                    Start Quiz →
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuizTopics;
