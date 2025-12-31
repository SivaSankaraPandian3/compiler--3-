const express = require('express');
const router = express.Router();
const {
    getUserProgress,
    saveUserCode,
    markProblemSolved,
    getSolvedCount,
    getUserStats
} = require('../controllers/userProgressController');

/**
 * User Progress Routes
 * All routes are prefixed with /api/progress
 */

// @route   GET /api/progress/:userId/:topic
// @desc    Get user progress for a specific topic
router.get('/:userId/:topic', getUserProgress);

// @route   GET /api/progress/:userId/:topic/solved-count
// @desc    Get count of solved problems for a topic
router.get('/:userId/:topic/solved-count', getSolvedCount);

// @route   GET /api/progress/:userId/stats
// @desc    Get overall user statistics
router.get('/:userId/stats', getUserStats);

// @route   POST /api/progress/save-code
// @desc    Save user's code for a problem
router.post('/save-code', saveUserCode);

// @route   POST /api/progress/mark-solved
// @desc    Mark a problem as solved
router.post('/mark-solved', markProblemSolved);

module.exports = router;
