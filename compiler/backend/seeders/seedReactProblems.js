const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const Problem = require('../models/Problem');

// Load env vars
dotenv.config({ path: path.join(__dirname, '../.env') });

// Connect to MongoDB
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI || process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

const importReactProblems = async () => {
    try {
        await connectDB();

        // Read React problems JSON file
        const data = fs.readFileSync(path.join(__dirname, 'react_problems_data.json'), 'utf-8');
        const problems = JSON.parse(data);

        // Insert React problems
        await Problem.insertMany(problems);
        console.log('✅ React Problems Imported Successfully!');
        console.log(`📊 Total problems added: ${problems.length}`);

        process.exit();
    } catch (error) {
        console.error(`❌ Error: ${error}`);
        process.exit(1);
    }
};

const deleteReactProblems = async () => {
    try {
        await connectDB();
        const result = await Problem.deleteMany({ topic: 'react' });
        console.log(`🗑️  Deleted ${result.deletedCount} React problems`);
        process.exit();
    } catch (error) {
        console.error(`❌ Error: ${error}`);
        process.exit(1);
    }
};

// Check command line arguments
if (process.argv[2] === '-d') {
    // Delete React problems
    deleteReactProblems();
} else {
    // Import React problems
    importReactProblems();
}
