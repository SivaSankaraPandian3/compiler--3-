const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.get('/topics', quizController.getAllQuizTopics);
router.get('/:topic/:level', quizController.getQuizDetails);

module.exports = router;
