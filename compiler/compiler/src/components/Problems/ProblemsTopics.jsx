import React from 'react';
import { useNavigate } from 'react-router-dom';
import { problemsApi } from '../../services/api';
import './ProblemsTopics.css';

// Import icons (using react-icons for better quality match to screenshot)
import { FaPython, FaDatabase, FaJs, FaCss3Alt, FaReact, FaHtml5, FaJava, FaAngular } from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiPostgresql } from 'react-icons/si';

const ProblemsTopics = () => {
    const navigate = useNavigate();
    const [topics, setTopics] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    // Metadata for topics (icons and titles)
    const topicsMetadata = {
        python: { icon: <FaPython />, title: 'Python Problems' },
        sql: { icon: <FaDatabase />, title: 'SQL Problems' },
        mysql: { icon: <SiMysql />, title: 'MySQL Problems' },
        postgresql: { icon: <SiPostgresql />, title: 'PostgreSQL Problems' },
        sqlserver: { icon: <FaDatabase />, title: 'SQL Server Problems' },
        javascript: { icon: <FaJs />, title: 'Javascript Problems' },
        css: { icon: <FaCss3Alt />, title: 'CSS Problems' },
        react: { icon: <FaReact />, title: 'React Problems' },
        html: { icon: <FaHtml5 />, title: 'HTML Problems' },
        java: { icon: <FaJava />, title: 'Java Problems' },
        'c++': { icon: <SiCplusplus />, title: 'C++ Problems' },
        cpp: { icon: <SiCplusplus />, title: 'C++ Problems' },
        angular: { icon: <FaAngular />, title: 'Angular Problems' },
        sqlite: { icon: <FaDatabase />, title: 'SQLite Problems' },
        oracle: { icon: <FaDatabase />, title: 'Oracle SQL Problems' },
    };

    React.useEffect(() => {
        const fetchTopics = async () => {
            try {
                setLoading(true);
                const response = await problemsApi.getAllTopics();
                if (response.success) {
                    // Merge API data with metadata
                    const mergedTopics = response.data.map(topic => ({
                        ...topic,
                        ...(topicsMetadata[topic.id] || { icon: <FaDatabase />, title: topic.title })
                    }));

                    // Sort to maintain a consistent order
                    const order = ['python', 'sql', 'javascript', 'css', 'react', 'html', 'java', 'c++', 'angular'];
                    mergedTopics.sort((a, b) => {
                        const indexA = order.indexOf(a.id);
                        const indexB = order.indexOf(b.id);
                        if (indexA === -1) return 1;
                        if (indexB === -1) return -1;
                        return indexA - indexB;
                    });

                    setTopics(mergedTopics);
                }
            } catch (err) {
                console.error('Error fetching topics:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchTopics();
    }, []);

    const handleTopicClick = (topicKey) => {
        navigate(`/problems/${topicKey}`);
    };

    if (loading) return <div className="loading">Loading topics...</div>;

    return (
        <div className="problems-topics-page">
            <div className="topics-header-section">
                <h1>Coding Problems</h1>
                <p>Master your skills with topic-specific coding challenges</p>
            </div>

            <div className="problems-topics-container">
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
                                    <span>{topic.totalProblems} Problems</span>
                                    <span className="solve-status">0 Solved</span>
                                </div>
                                <div className="solve-link">
                                    Solve Challenge <span>→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProblemsTopics;
