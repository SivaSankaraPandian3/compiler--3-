import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { quizzesApi, studentsApi } from '../../services/api';
import './Quiz.css';

const Quiz = () => {
    const { topic, level } = useParams();
    const navigate = useNavigate();

    const [quizData, setQuizData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [score, setScore] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [quizCompleted, setQuizCompleted] = useState(false);

    // Form State for Beginner Level
    const [formData, setFormData] = useState({ email: '', phone: '' });
    const [submissionStatus, setSubmissionStatus] = useState({ loading: false, error: null, success: false });

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                setLoading(true);
                const response = await quizzesApi.getQuizByTopicAndLevel(topic, level);
                if (response.success) {
                    setQuizData(response.data);
                }
            } catch (err) {
                console.error('Error fetching quiz:', err);
                setError('Failed to load quiz questions.');
            } finally {
                setLoading(false);
            }
        };

        fetchQuiz();
        // Reset state when level changes
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setScore(0);
        setAnsweredQuestions([]);
        setQuizCompleted(false);
    }, [topic, level]);

    // Handle Form Submit
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setSubmissionStatus({ loading: true, error: null, success: false });

        try {
            const data = await studentsApi.submitQuiz({
                email: formData.email,
                phone: formData.phone,
                quizResult: {
                    topic,
                    level,
                    score,
                    totalQuestions: quizData.questions.length,
                    percentage: (score / quizData.questions.length) * 100,
                    passed: true
                }
            });

            setSubmissionStatus({ loading: false, error: null, success: true });
        } catch (err) {
            setSubmissionStatus({ loading: false, error: err.response?.data?.message || err.message, success: false });
        }
    };

    if (loading) return <div className="loading">Loading quiz...</div>;
    if (error || !quizData || !quizData.questions || quizData.questions.length === 0) {
        return (
            <div className="quiz-container">
                <div className="quiz-error">
                    <h2>{error || 'Quiz Level Not Found'}</h2>
                    <p>The {level} level for "{topic}" is not available.</p>
                    <button onClick={() => navigate('/quiz')} className="btn-primary">
                        Back to Quiz Topics
                    </button>
                </div>
            </div>
        );
    }

    const question = quizData.questions[currentQuestion];
    const progress = ((currentQuestion + 1) / quizData.questions.length) * 100;

    const handleAnswerSelect = (index) => {
        if (showExplanation) return;
        setSelectedAnswer(index);
    };

    const handleSubmitAnswer = () => {
        if (selectedAnswer === null) return;

        setShowExplanation(true);

        const isCorrect = selectedAnswer === question.correctAnswer;
        if (isCorrect) {
            setScore(score + 1);
        }

        setAnsweredQuestions([
            ...answeredQuestions,
            {
                questionId: question.id,
                selectedAnswer,
                correctAnswer: question.correctAnswer,
                isCorrect
            }
        ]);
    };

    const handleNextQuestion = () => {
        if (currentQuestion < quizData.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
        } else {
            setQuizCompleted(true);
        }
    };

    const handleRestartQuiz = () => {
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setScore(0);
        setAnsweredQuestions([]);
        setQuizCompleted(false);
    };

    const handleNextLevel = () => {
        const levels = ['beginner', 'medium', 'hard'];
        const currentIndex = levels.indexOf(level);
        if (currentIndex < levels.length - 1) {
            navigate(`/quiz/${topic}/${levels[currentIndex + 1]}`);
        }
    };

    const getNextLevelName = () => {
        const levels = ['beginner', 'medium', 'hard'];
        const currentIndex = levels.indexOf(level);
        return currentIndex < levels.length - 1 ? levels[currentIndex + 1] : null;
    };

    if (quizCompleted) {
        const percentage = (score / quizData.questions.length) * 100;
        const passed = percentage >= 60;
        const nextLevel = getNextLevelName();

        return (
            <div className="quiz-container">
                <div className="quiz-results">
                    <div className="results-header">
                        <span className="results-icon">{quizData.icon}</span>
                        <h1>{level.charAt(0).toUpperCase() + level.slice(1)} Quiz Completed!</h1>
                    </div>

                    <div className="results-body">
                        <div className={`score-circle ${passed ? 'passed' : 'failed'}`}>
                            <div className="score-value">{percentage.toFixed(0)}</div>
                            <div className="score-label">Your Score</div>
                        </div>

                        <div className="score-details">
                            <div className="score-stat">
                                <span className="stat-label">Correct Answers</span>
                                <span className="stat-value correct">{score}</span>
                            </div>
                            <div className="score-stat">
                                <span className="stat-label">Wrong Answers</span>
                                <span className="stat-value wrong">{quizData.questions.length - score}</span>
                            </div>
                            <div className="score-stat">
                                <span className="stat-label">Total Questions</span>
                                <span className="stat-value">{quizData.questions.length}</span>
                            </div>
                        </div>

                        <div className={`result-message ${passed ? 'success' : 'fail'}`}>
                            {passed ? (
                                <>
                                    <h3>🎉 Congratulations!</h3>
                                    <p>You passed the {level} level! Great job on mastering {quizData.title}.</p>
                                </>
                            ) : (
                                <>
                                    <h3>📚 Keep Learning!</h3>
                                    <p>Don't give up! Review the material and try again.</p>
                                </>
                            )}
                        </div>

                        <div className="results-actions">
                            {passed && level === 'beginner' && !submissionStatus.success ? (
                                <div className="student-form-container">
                                    <h3>Almost there! 🚀</h3>
                                    <p>Enter your details to unlock the Next Level.</p>
                                    <form onSubmit={handleFormSubmit} className="student-form">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="tel"
                                                placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <button type="submit" className="btn-primary" disabled={submissionStatus.loading}>
                                            {submissionStatus.loading ? 'Saving...' : 'Submit & Unlock Medium Level'}
                                        </button>
                                        {submissionStatus.error && <p className="error-text">{submissionStatus.error}</p>}
                                    </form>
                                    <button onClick={handleRestartQuiz} className="btn-secondary" style={{ marginTop: '10px' }}>
                                        Retake Quiz
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <button onClick={handleRestartQuiz} className="btn-secondary">
                                        Retake Quiz
                                    </button>

                                    {passed && nextLevel && (
                                        <button onClick={handleNextLevel} className="btn-primary">
                                            Next Level: {nextLevel.charAt(0).toUpperCase() + nextLevel.slice(1)} →
                                        </button>
                                    )}

                                    <button onClick={() => navigate('/quiz')} className="btn-secondary">
                                        Back to Topics
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="quiz-container">
            <div className="quiz-header">
                <div className="quiz-title">
                    <span className="quiz-icon">{quizData.icon}</span>
                    <h1>{quizData.title} <span style={{ fontSize: '0.6em', opacity: 0.8 }}>({level})</span></h1>
                </div>
                <button onClick={() => navigate('/quiz')} className="btn-back">
                    ← Back to Topics
                </button>
            </div>

            <div className="quiz-progress">
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="progress-text">
                    Question {currentQuestion + 1} of {quizData.questions.length}
                </div>
            </div>

            <div className="quiz-content">
                <div className="question-card">
                    <h2 className="question-text">{question.question}</h2>

                    <div className="options-list">
                        {question.options.map((option, index) => {
                            let optionClass = 'option-item';

                            if (showExplanation) {
                                if (index === question.correctAnswer) {
                                    optionClass += ' correct';
                                } else if (index === selectedAnswer && selectedAnswer !== question.correctAnswer) {
                                    optionClass += ' wrong';
                                }
                            } else if (selectedAnswer === index) {
                                optionClass += ' selected';
                            }

                            return (
                                <div
                                    key={index}
                                    className={optionClass}
                                    onClick={() => handleAnswerSelect(index)}
                                >
                                    <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                                    <span className="option-text">{option}</span>
                                    {showExplanation && index === question.correctAnswer && (
                                        <span className="option-icon">✓</span>
                                    )}
                                    {showExplanation && index === selectedAnswer && selectedAnswer !== question.correctAnswer && (
                                        <span className="option-icon">✗</span>
                                    )}
                                </div>
                            );
                        })}
                    </div>


                    {showExplanation && (
                        <div className="explanation-box">
                            <h3>💡 Explanation</h3>
                            <p>{question.explanation}</p>
                        </div>
                    )}
                </div>

                <div className="quiz-actions">
                    {!showExplanation ? (
                        <button
                            onClick={handleSubmitAnswer}
                            disabled={selectedAnswer === null}
                            className="btn-submit"
                        >
                            Submit Answer
                        </button>
                    ) : (
                        <button
                            onClick={handleNextQuestion}
                            className="btn-next"
                        >
                            {currentQuestion < quizData.questions.length - 1 ? 'Next Question →' : 'View Results'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Quiz;
