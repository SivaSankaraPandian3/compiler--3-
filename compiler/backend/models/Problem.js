const mongoose = require('mongoose');

/**
 * Problem Schema
 * Stores coding problems for different programming languages
 */
const problemSchema = new mongoose.Schema({
    // Problem identification
    topic: {
        type: String,
        required: [true, 'Topic is required'],
        enum: ['sql', 'python', 'java', 'javascript', 'html', 'css', 'c++', 'react', 'angular', 'mysql', 'postgresql', 'sqlserver'],
        lowercase: true,
        trim: true
    },

    // Problem details
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true
    },

    description: {
        type: String,
        required: [true, 'Description is required']
    },

    difficulty: {
        type: Number,
        required: [true, 'Difficulty is required'],
        min: 1,
        max: 3,
        default: 1
    },

    // Categorization
    tags: [{
        type: String,
        trim: true
    }],

    // Code related
    starterCode: {
        type: String,
        default: '// Write your code here'
    },

    solution: {
        type: String,
        default: ''
    },

    hints: [{
        type: String
    }],

    // Test cases
    testCases: [{
        input: String,
        expectedOutput: String,
        pass: Boolean
    }],

    // Metadata
    icon: {
        type: String,
        default: '📝'
    },

    color: {
        type: String,
        default: '#667eea'
    },

    // Statistics
    solvedCount: {
        type: Number,
        default: 0
    },

    attemptCount: {
        type: Number,
        default: 0
    }

}, {
    timestamps: true // Adds createdAt and updatedAt
});

// Indexes for better query performance
problemSchema.index({ topic: 1, difficulty: 1 });
problemSchema.index({ tags: 1 });

// Virtual for problem ID display
problemSchema.virtual('displayId').get(function () {
    return this._id.toString().slice(-6).toUpperCase();
});

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;
