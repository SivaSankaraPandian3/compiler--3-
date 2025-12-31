# Database Seeders

This directory contains scripts to bulk import data into your MongoDB database.

## 1. Adding Coding Problems
1. Open `problems_data.json`.
2. Add your questions in the JSON format shown in the example.
3. Run the script:
   ```bash
   node seeders/seedProblems.js
   ```

## 2. Adding Quiz Questions
1. Open `quizzes_data.json`.
2. Add your questions grouped by topic and level.
3. Run the script:
   ```bash
   node seeders/seedQuizzes.js
   ```

**Note:** Ensure your `.env` file in the backend root has the correct `MONGO_URI` before running these scripts.
