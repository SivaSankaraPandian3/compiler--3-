const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.join(__dirname, '../.env') });
const mongoose = require('mongoose');
const Problem = require('../models/Problem');

const verifyReactProblems = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB\n');

        const count = await Problem.countDocuments({ topic: 'react' });
        console.log(`📊 Total React problems in database: ${count}\n`);

        const problems = await Problem.find({ topic: 'react' }).select('title difficulty tags');
        console.log('📝 React Problems List:\n');

        problems.forEach((p, i) => {
            console.log(`${i + 1}. ${p.title}`);
            console.log(`   Difficulty: ${p.difficulty}`);
            console.log(`   Tags: ${p.tags.join(', ')}`);
            console.log('');
        });

        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
};

verifyReactProblems();
