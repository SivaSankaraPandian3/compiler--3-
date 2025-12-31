const Problem = require('../models/Problem');

/**
 * Problem Controller
 * Handles all business logic for problem-related operations
 */

// @desc    Get all problems
// @route   GET /api/problems
// @access  Public
const getAllProblems = async (req, res) => {
    try {
        const problems = await Problem.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: problems.length,
            data: problems
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching problems',
            error: error.message
        });
    }
};

// @desc    Get problems by topic
// @route   GET /api/problems/topic/:topic
// @access  Public
const getProblemsByTopic = async (req, res) => {
    try {
        const { topic } = req.params;
        const searchTopic = topic.toLowerCase();

        let query = { topic: searchTopic };
        // Handle C++ special case: search for both 'c++' and 'cpp'
        if (searchTopic === 'c++' || searchTopic === 'cpp') {
            query = { topic: { $in: ['c++', 'cpp'] } };
        }

        const problems = await Problem.find(query);

        if (!problems || problems.length === 0) {
            return res.status(404).json({
                success: false,
                message: `No problems found for topic: ${topic}`
            });
        }

        res.status(200).json({
            success: true,
            topic: topic,
            count: problems.length,
            data: problems
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching problems by topic',
            error: error.message
        });
    }
};

// @desc    Get single problem by ID
// @route   GET /api/problems/:id
// @access  Public
const getProblemById = async (req, res) => {
    try {
        const problem = await Problem.findById(req.params.id);

        if (!problem) {
            return res.status(404).json({
                success: false,
                message: 'Problem not found'
            });
        }

        res.status(200).json({
            success: true,
            data: problem
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching problem',
            error: error.message
        });
    }
};

// @desc    Create new problem
// @route   POST /api/problems
// @access  Public (should be protected in production)
const createProblem = async (req, res) => {
    try {
        const problem = await Problem.create(req.body);

        res.status(201).json({
            success: true,
            message: 'Problem created successfully',
            data: problem
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error creating problem',
            error: error.message
        });
    }
};

// @desc    Update problem
// @route   PUT /api/problems/:id
// @access  Public (should be protected in production)
const updateProblem = async (req, res) => {
    try {
        const problem = await Problem.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true, // Return updated document
                runValidators: true // Run schema validators
            }
        );

        if (!problem) {
            return res.status(404).json({
                success: false,
                message: 'Problem not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Problem updated successfully',
            data: problem
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error updating problem',
            error: error.message
        });
    }
};

// @desc    Delete problem
// @route   DELETE /api/problems/:id
// @access  Public (should be protected in production)
const deleteProblem = async (req, res) => {
    try {
        const problem = await Problem.findByIdAndDelete(req.params.id);

        if (!problem) {
            return res.status(404).json({
                success: false,
                message: 'Problem not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Problem deleted successfully',
            data: {}
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting problem',
            error: error.message
        });
    }
};

// @desc    Get problems by difficulty
// @route   GET /api/problems/difficulty/:level
// @access  Public
const getProblemsByDifficulty = async (req, res) => {
    try {
        const { level } = req.params;
        const problems = await Problem.find({ difficulty: parseInt(level) });

        res.status(200).json({
            success: true,
            difficulty: level,
            count: problems.length,
            data: problems
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching problems by difficulty',
            error: error.message
        });
    }
};

// @desc    Get summary of all topics
// @route   GET /api/problems/topics/summary
// @access  Public
const getTopicsSummary = async (req, res) => {
    try {
        // Check if database is connected
        if (require('mongoose').connection.readyState !== 1) {
            return res.status(503).json({
                success: false,
                message: 'Database connection is not established'
            });
        }

        const topics = await Problem.aggregate([
            {
                $group: {
                    _id: {
                        $cond: {
                            if: { $eq: ["$topic", "cpp"] },
                            then: "c++",
                            else: "$topic"
                        }
                    },
                    totalProblems: { $sum: 1 },
                    title: { $first: '$title' },
                    icon: { $first: '$icon' },
                    color: { $first: '$color' }
                }
            },
            {
                $project: {
                    id: '$_id',
                    _id: 0,
                    title: {
                        $cond: {
                            if: { $in: ["$_id", ["c++", "cpp"]] },
                            then: "C++ Problems",
                            else: { $concat: [{ $toUpper: { $substrCP: ["$_id", 0, 1] } }, { $substrCP: ["$_id", 1, { $strLenCP: "$_id" }] }, " Problems"] }
                        }
                    },
                    icon: 1,
                    color: 1,
                    totalProblems: 1
                }
            }
        ]);

        res.status(200).json({
            success: true,
            data: topics
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching topics summary',
            error: error.message
        });
    }
};

// @desc    Clear all problems
// @route   DELETE /api/problems/clear/all
// @access  Public (should be protected)
const clearAllProblems = async (req, res) => {
    try {
        await Problem.deleteMany({});
        res.status(200).json({
            success: true,
            message: 'All problems cleared successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error clearing problems',
            error: error.message
        });
    }
};

module.exports = {
    getAllProblems,
    getProblemsByTopic,
    getProblemById,
    createProblem,
    updateProblem,
    deleteProblem,
    getProblemsByDifficulty,
    getTopicsSummary,
    clearAllProblems
};
