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
        const data = fs.readFileSync(path.join(__dirname, 'problems_data.json'), 'utf-8');
        const problems = JSON.parse(data);

        // Optional: clear existing problems to avoid duplicates if that's what you want
        // await Problem.deleteMany(); 
        // console.log('Data Destroyed...');

        await Problem.insertMany(problems);
        console.log('Data Imported Successfully!');

        process.exit();
    } catch (error) {
        console.error(`Error: ${error}`);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    // If run with -d flag, destroy data first (helper utility)
    const destroyData = async () => {
        try {
            await connectDB();
            await Problem.deleteMany();
            console.log('Data Destroyed!');
            process.exit();
        } catch (error) {
            console.error(`Error: ${error}`);
            process.exit(1);
        }
    }
    destroyData();
} else {
    importData();
}
