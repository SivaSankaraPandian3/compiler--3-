const Student = require('../models/Student');

// Submit quiz result and update/create student
exports.submitQuizResult = async (req, res) => {
    try {
        const { email, phone, quizResult } = req.body;

        if (!email || !phone) {
            return res.status(400).json({ message: 'Email and Phone are required.' });
        }

        let student = await Student.findOne({ email });

        if (!student) {
            // Create new student
            student = new Student({
                email,
                phone,
                quizResults: []
            });
        } else {
            // Update phone if changed (optional, keeping latest)
            student.phone = phone;
        }

        // Add quiz result
        if (quizResult) {
            student.quizResults.push(quizResult);
        }

        await student.save();

        res.status(200).json({ message: 'Result saved successfully', student });
    } catch (error) {
        console.error('Error saving quiz result:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
