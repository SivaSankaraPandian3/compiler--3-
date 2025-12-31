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
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
        process.exit(1);
    }
};

const importData = async () => {
    try {
        await connectDB();

        // Read JSON file
        const dataPath = path.join(__dirname, 'interview_prep_data.json');
        if (!fs.existsSync(dataPath)) {
            console.error(`❌ File not found: ${dataPath}`);
            process.exit(1);
        }

        const data = fs.readFileSync(dataPath, 'utf-8');
        const problems = JSON.parse(data);

        console.log(`🚀 Importing ${problems.length} problems...`);

        // We use insertMany to add them. 
        // If you want to replace ALL problems, uncomment the deleteMany line.
        // For now, we just add them.
        await Problem.insertMany(problems);

        console.log('✨ Interview prep data imported successfully!');
        process.exit();
    } catch (error) {
        console.error(`❌ Error: ${error}`);
        process.exit(1);
    }
};


if (process.argv[2] === '-d') {
    const destroyData = async () => {
        try {
            await connectDB();
            await Problem.deleteMany();
            console.log('✅ Data Destroyed!');
            process.exit();
        } catch (error) {
            console.error(`❌ Error: ${error}`);
            process.exit(1);
        }
    };
    destroyData();
} else {
    importData();
}
