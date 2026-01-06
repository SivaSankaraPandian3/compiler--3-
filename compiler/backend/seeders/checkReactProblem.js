const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const Problem = require('../models/Problem');

dotenv.config({ path: path.join(__dirname, '../.env') });

const check = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected');

        const p = await Problem.findOne({ title: "Hello React Component" });
        if (p) {
            console.log('Title:', p.title);
            console.log('Solution length:', p.solution ? p.solution.length : 0);
            console.log('Solution content:', p.solution);

            if (!p.solution) {
                console.log('Solution missing. Updating...');
                const newSolution = `function App() {
  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
}`;
                p.solution = newSolution;
                await p.save();
                console.log('Updated with solution.');
            }
        } else {
            console.log('Problem not found');
        }
        process.exit();
    } catch (e) { console.error(e); process.exit(1); }
};
check();
