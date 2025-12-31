const mongoose = require('mongoose');

/**
 * User Progress Schema
 * Tracks user's progress, solved problems, and saved code
 */
const userProgressSchema = new mongoose.Schema({
    // User identification (for now using session/local storage ID)
    userId: {
        type: String,
        required: true,
        default: 'default-user'
    },

    // Topic progress
    topic: {
        type: String,
        required: true,
        enum: ['sql', 'python', 'java', 'javascript', 'html', 'css', 'c++', 'react', 'angular', 'mysql', 'postgresql', 'sqlserver']
    },

    // Problem reference
    problemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Problem',
        required: true
    },

    // Progress tracking
    isSolved: {
        type: Boolean,
        default: false
    },

    solvedAt: {
        type: Date
    },

    // Code saving
    savedCode: {
        type: String,
        default: ''
    },

    lastSavedAt: {
        type: Date,
        default: Date.now
    },

    // Attempt tracking
    attempts: {
        type: Number,
        default: 0
    },

    // Time tracking
    timeSpent: {
        type: Number, // in seconds
        default: 0
    }

}, {
    timestamps: true
});

// Compound index for efficient queries
userProgressSchema.index({ userId: 1, topic: 1, problemId: 1 }, { unique: true });

// Method to mark problem as solved
userProgressSchema.methods.markSolved = function () {
    this.isSolved = true;
    this.solvedAt = new Date();
    return this.save();
};

// Method to save user code
userProgressSchema.methods.saveCode = function (code) {
    this.savedCode = code;
    this.lastSavedAt = new Date();
    return this.save();
};

const UserProgress = mongoose.model('UserProgress', userProgressSchema);

module.exports = UserProgress;
