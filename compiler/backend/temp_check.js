const mongoose = require('mongoose');
require('dotenv').config();
const Problem = require('./models/Problem');

async function check() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to DB');
        const topics = await Problem.aggregate([
            { $group: { _id: '$topic', count: { $sum: 1 } } }
        ]);
        console.log('Topics Found:', JSON.stringify(topics, null, 2));

        const reactProblems = await Problem.find({ topic: 'react' }).select('title').limit(5);
        console.log('React Problems Head:', reactProblems);

        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

check();
