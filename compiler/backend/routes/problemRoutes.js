const express = require('express');
const router = express.Router();
const {
    getAllProblems,
    getProblemsByTopic,
    getProblemById,
    createProblem,
    updateProblem,
    deleteProblem,
    getProblemsByDifficulty,
    getTopicsSummary,
    clearAllProblems
} = require('../controllers/problemController');

/**
 * Problem Routes
 * All routes are prefixed with /api/problems
 */

// @route   GET /api/problems/topics/summary
// @desc    Get summary of all topics
router.get('/topics/summary', getTopicsSummary);

// @route   DELETE /api/problems/clear/all
// @desc    Clear all problems
router.delete('/clear/all', clearAllProblems);

// @route   GET /api/problems
// @desc    Get all problems
router.get('/', getAllProblems);

// @route   GET /api/problems/topic/:topic
// @desc    Get problems by topic (sql, python, java, etc.)
router.get('/topic/:topic', getProblemsByTopic);

// @route   GET /api/problems/difficulty/:level
// @desc    Get problems by difficulty level (1, 2, 3)
router.get('/difficulty/:level', getProblemsByDifficulty);

// @route   GET /api/problems/:id
// @desc    Get single problem by ID
router.get('/:id', getProblemById);

// @route   POST /api/problems
// @desc    Create new problem
router.post('/', createProblem);

// @route   PUT /api/problems/:id
// @desc    Update problem
router.put('/:id', updateProblem);

// @route   DELETE /api/problems/:id
// @desc    Delete problem
router.delete('/:id', deleteProblem);

module.exports = router;
