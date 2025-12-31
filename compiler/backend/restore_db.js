const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const Problem = require('./models/Problem');

// Load env vars from the same directory
dotenv.config({ path: path.join(__dirname, '.env') });

const restoreAll = async () => {
    try {
        console.log('🔄 Starting Full Database Restoration...');

        const uri = process.env.MONGODB_URI || process.env.MONGO_URI;
        if (!uri) throw new Error('MONGODB_URI is not defined in .env');

        await mongoose.connect(uri);
        console.log('✅ Connected to MongoDB');

        // 1. Clear existing problems
        const deleteRes = await Problem.deleteMany({});
        console.log(`🗑️  Cleared existing problems (${deleteRes.deletedCount} removed)`);

        // 2. Load and Seed Basics
        const basicsPath = path.join(__dirname, 'seeders', 'problems_data.json');
        const basicsData = JSON.parse(fs.readFileSync(basicsPath, 'utf-8'));
        await Problem.insertMany(basicsData);
        console.log(`✅ Seeded ${basicsData.length} basic problems`);

        // 3. Load and Seed React
        const reactPath = path.join(__dirname, 'seeders', 'react_problems_data.json');
        const reactData = JSON.parse(fs.readFileSync(reactPath, 'utf-8'));
        const enrichedReact = reactData.map(p => ({
            ...p,
            icon: '⚛️',
            color: '#61DAFB'
        }));
        await Problem.insertMany(enrichedReact);
        console.log(`✅ Seeded ${enrichedReact.length} React problems`);

        // 4. Load and Seed Interview Prep
        const interviewPath = path.join(__dirname, 'seeders', 'interview_prep_data.json');
        if (fs.existsSync(interviewPath)) {
            const interviewData = JSON.parse(fs.readFileSync(interviewPath, 'utf-8'));
            await Problem.insertMany(interviewData);
            console.log(`✅ Seeded ${interviewData.length} Interview Prep problems`);
        }

        console.log('\n✨ Database Restoration Complete!');
        process.exit(0);
    } catch (err) {
        console.error('❌ Restoration Failed:', err.message);
        if (err.errors) console.error('Validation Errors:', Object.keys(err.errors));
        process.exit(1);
    }
};

restoreAll();
