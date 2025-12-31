const UserProgress = require('../models/UserProgress');

/**
 * User Progress Controller
 * Handles user progress tracking, solved problems, and saved code
 */

// @desc    Get user progress for a topic
// @route   GET /api/progress/:userId/:topic
// @access  Public
const getUserProgress = async (req, res) => {
    try {
        const { userId, topic } = req.params;
        const progress = await UserProgress.find({ userId, topic }).populate('problemId');

        res.status(200).json({
            success: true,
            count: progress.length,
            data: progress
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching user progress',
            error: error.message
        });
    }
};

// @desc    Save user code for a problem
// @route   POST /api/progress/save-code
// @access  Public
const saveUserCode = async (req, res) => {
    try {
        const { userId, topic, problemId, code } = req.body;

        let progress = await UserProgress.findOne({ userId, topic, problemId });

        if (progress) {
            // Update existing progress
            progress.savedCode = code;
            progress.lastSavedAt = new Date();
            await progress.save();
        } else {
            // Create new progress entry
            progress = await UserProgress.create({
                userId,
                topic,
                problemId,
                savedCode: code
            });
        }

        res.status(200).json({
            success: true,
            message: 'Code saved successfully',
            data: progress
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error saving code',
            error: error.message
        });
    }
};

// @desc    Mark problem as solved
// @route   POST /api/progress/mark-solved
// @access  Public
const markProblemSolved = async (req, res) => {
    try {
        const { userId, topic, problemId } = req.body;

        let progress = await UserProgress.findOne({ userId, topic, problemId });

        if (progress) {
            progress.isSolved = true;
            progress.solvedAt = new Date();
            await progress.save();
        } else {
            progress = await UserProgress.create({
                userId,
                topic,
                problemId,
                isSolved: true,
                solvedAt: new Date()
            });
        }

        res.status(200).json({
            success: true,
            message: 'Problem marked as solved',
            data: progress
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error marking problem as solved',
            error: error.message
        });
    }
};

// @desc    Get solved count for a topic
// @route   GET /api/progress/:userId/:topic/solved-count
// @access  Public
const getSolvedCount = async (req, res) => {
    try {
        const { userId, topic } = req.params;
        const solvedProgress = await UserProgress.find({
            userId,
            topic,
            isSolved: true
        }).select('problemId');

        res.status(200).json({
            success: true,
            topic,
            solvedCount: solvedProgress.length,
            solvedProblemIds: solvedProgress.map(p => p.problemId)
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching solved count',
            error: error.message
        });
    }
};

// @desc    Get all user statistics
// @route   GET /api/progress/:userId/stats
// @access  Public
const getUserStats = async (req, res) => {
    try {
        const { userId } = req.params;

        const stats = await UserProgress.aggregate([
            { $match: { userId } },
            {
                $group: {
                    _id: '$topic',
                    totalProblems: { $sum: 1 },
                    solvedProblems: {
                        $sum: { $cond: ['$isSolved', 1, 0] }
                    },
                    totalAttempts: { $sum: '$attempts' },
                    totalTimeSpent: { $sum: '$timeSpent' }
                }
            }
        ]);

        res.status(200).json({
            success: true,
            data: stats
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching user statistics',
            error: error.message
        });
    }
};

module.exports = {
    getUserProgress,
    saveUserCode,
    markProblemSolved,
    getSolvedCount,
    getUserStats
};
