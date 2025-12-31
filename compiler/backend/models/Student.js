const mongoose = require('mongoose');

const quizResultSchema = new mongoose.Schema({
    topic: { type: String, required: true },
    level: { type: String, required: true },
    score: { type: Number, required: true },
    totalQuestions: { type: Number, required: true },
    percentage: { type: Number, required: true },
    passed: { type: Boolean, required: true },
    date: { type: Date, default: Date.now }
});

const studentSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    quizResults: [quizResultSchema],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Student', studentSchema);
