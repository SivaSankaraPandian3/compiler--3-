# Compiler Backend API

A RESTful API for managing coding problems and tracking user progress in an online compiler application.

## 📁 Folder Structure

```
backend/
├── config/              # Configuration files
│   └── db.js           # Database connection
├── controllers/         # Business logic
│   ├── problemController.js
│   └── userProgressController.js
├── models/             # Database schemas
│   ├── Problem.js
│   └── UserProgress.js
├── routes/             # API route definitions
│   ├── problemRoutes.js
│   └── userProgressRoutes.js
├── middleware/         # Custom middleware
│   ├── errorHandler.js
│   └── logger.js
├── utils/              # Helper functions
│   └── responseHelper.js
├── .env.example        # Environment variables template
├── .gitignore         # Git ignore rules
├── package.json       # Dependencies
└── server.js          # Main application file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Installation

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   # Copy the example file
   copy .env.example .env
   
   # Edit .env and add your MongoDB connection string
   ```

3. **Start the server:**
   ```bash
   # Development mode (with auto-reload)
   npm run dev
   
   # Production mode
   npm start
   ```

The server will start on `http://localhost:5000`

## 📡 API Endpoints

### Problems

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/problems` | Get all problems |
| GET | `/api/problems/topic/:topic` | Get problems by topic |
| GET | `/api/problems/difficulty/:level` | Get problems by difficulty |
| GET | `/api/problems/:id` | Get single problem |
| POST | `/api/problems` | Create new problem |
| PUT | `/api/problems/:id` | Update problem |
| DELETE | `/api/problems/:id` | Delete problem |

### User Progress

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/progress/:userId/:topic` | Get user progress for topic |
| GET | `/api/progress/:userId/:topic/solved-count` | Get solved count |
| GET | `/api/progress/:userId/stats` | Get user statistics |
| POST | `/api/progress/save-code` | Save user code |
| POST | `/api/progress/mark-solved` | Mark problem as solved |

## 📝 Example Requests

### Create a Problem
```bash
POST /api/problems
Content-Type: application/json

{
  "topic": "python",
  "title": "Two Sum",
  "description": "Find two numbers that add up to target",
  "difficulty": 1,
  "tags": ["arrays", "easy"],
  "starterCode": "def two_sum(nums, target):\n    pass",
  "solution": "def two_sum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        if target - num in seen:\n            return [seen[target - num], i]\n        seen[num] = i",
  "hints": ["Use a hash map", "Store seen numbers"]
}
```

### Save User Code
```bash
POST /api/progress/save-code
Content-Type: application/json

{
  "userId": "user123",
  "topic": "python",
  "problemId": "problem_id_here",
  "code": "def two_sum(nums, target):\n    # my solution"
}
```

## 🔧 Environment Variables

Create a `.env` file with:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/compiler
CLIENT_URL=http://localhost:5173
```

## 📦 Technologies Used

- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## 🛡️ Error Handling

The API uses centralized error handling with standardized responses:

```json
{
  "success": false,
  "message": "Error message here",
  "errors": ["Detailed error 1", "Detailed error 2"]
}
```

## 📄 License

ISC
