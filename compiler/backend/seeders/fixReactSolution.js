const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const Problem = require('../models/Problem');

dotenv.config({ path: path.join(__dirname, '../.env') });

const fix = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected');

        const correctSolution = `function App() {
  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
}`;

        const res = await Problem.updateOne(
            { title: "Hello React Component" },
            { $set: { solution: correctSolution } }
        );

        console.log('Update result:', res);
        process.exit();
    } catch (e) { console.error(e); process.exit(1); }
};
fix();
