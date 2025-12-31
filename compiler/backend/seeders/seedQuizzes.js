const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const Quiz = require('../models/Quiz');

// Load env vars
dotenv.config({ path: path.join(__dirname, '../.env') });

// Connect to MongoDB
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

const importData = async () => {
    try {
        await connectDB();

        // Read JSON file
        const data = fs.readFileSync(path.join(__dirname, 'quizzes_data.json'), 'utf-8');
        const updates = JSON.parse(data);

        for (const update of updates) {
            const { topic, level, questions } = update;

            // Validate level
            if (!['beginner', 'medium', 'hard'].includes(level)) {
                console.warn(`Skipping invalid level: ${level} for topic ${topic}`);
                continue;
            }

            // Find the quiz document for the topic
            const quiz = await Quiz.findOne({ topic: topic.toLowerCase() });

            if (quiz) {
                // Add questions to the existing level array
                // We use $push with $each to append multiple items
                await Quiz.updateOne(
                    { _id: quiz._id },
                    { $push: { [`levels.${level}`]: { $each: questions } } }
                );
                console.log(`Added ${questions.length} questions to ${topic} (${level})`);
            } else {
                console.warn(`Quiz topic '${topic}' not found. logical 'create' not implemented in this simple seed. Please create the topic first or update script.`);
            }
        }

        console.log('Quiz Data Import Process Completed!');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error}`);
        process.exit(1);
    }
};

importData();
