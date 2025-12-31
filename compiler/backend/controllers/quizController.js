const Quiz = require('../models/Quiz');

// @desc    Get all quiz topics
// @route   GET /api/quizzes/topics
// @access  Public
exports.getAllQuizTopics = async (req, res) => {
    try {
        const quizzes = await Quiz.find({});

        const topics = quizzes.map(quiz => {
            const totalQuestions = (quiz.levels.beginner?.length || 0) +
                (quiz.levels.medium?.length || 0) +
                (quiz.levels.hard?.length || 0);
            return {
                id: quiz.topic,
                title: quiz.title,
                icon: quiz.icon,
                color: quiz.color,
                questionCount: totalQuestions
            };
        });

        res.status(200).json({
            success: true,
            count: topics.length,
            data: topics
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching quiz topics',
            error: error.message
        });
    }
};

// @desc    Get quiz by topic and level
// @route   GET /api/quizzes/:topic/:level
// @access  Public
exports.getQuizDetails = async (req, res) => {
    try {
        const { topic, level } = req.params;
        const quiz = await Quiz.findOne({ topic });

        if (!quiz) {
            return res.status(404).json({
                success: false,
                message: `Quiz for topic '${topic}' not found`
            });
        }

        const questions = quiz.levels[level] || [];

        res.status(200).json({
            success: true,
            data: {
                topic: quiz.topic,
                title: quiz.title,
                icon: quiz.icon,
                color: quiz.color,
                level: level,
                questions: questions
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching quiz details',
            error: error.message
        });
    }
};
