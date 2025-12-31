const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    question: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswer: { type: Number, required: true },
    explanation: { type: String, required: true }
});

const quizSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true,
        unique: true,
        enum: ['sql', 'python', 'java', 'javascript', 'html', 'css', 'c++', 'react', 'angular', 'mysql', 'postgresql', 'sqlserver']
    },
    title: { type: String, required: true },
    icon: { type: String, default: '❓' },
    color: { type: String, default: '#667eea' },
    levels: {
        beginner: [questionSchema],
        medium: [questionSchema],
        hard: [questionSchema]
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Quiz', quizSchema);
