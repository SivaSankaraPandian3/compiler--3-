const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/submit-quiz', studentController.submitQuizResult);

module.exports = router;
