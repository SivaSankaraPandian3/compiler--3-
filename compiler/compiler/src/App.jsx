import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import HtmlCompiler from "./components/HtmlCompiler/HtmlCompiler.jsx";
import ReactCompiler from "./components/HtmlCompiler/ReactCompiler.jsx";
import AngularCompiler from "./components/HtmlCompiler/AngularCompiler.jsx";
import CodeCompiler from "./components/CodeCompiler/CodeCompiler.jsx";
import SqlCompiler from "./components/SqlCompiler/SqlCompiler.jsx";
import QuizTopics from "./components/Quiz/QuizTopics.jsx";
import Quiz from "./components/Quiz/Quiz.jsx";
import ProblemsTopics from "./components/Problems/ProblemsTopics.jsx";
import ProblemsList from "./components/Problems/ProblemsList.jsx";
import ProblemDetail from "./components/Problems/ProblemDetail.jsx";
import "./styles/App.css";




function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content-area">
          <div className="route-content">
            <Routes>
              <Route path="/" element={<Navigate to="/problems" replace />} />
              <Route path="/html" element={<HtmlCompiler />} />
              <Route path="/python" element={<CodeCompiler language="python" label="Python" />} />
              <Route path="/java" element={<CodeCompiler language="java" label="Java" />} />
              <Route path="/c++" element={<CodeCompiler language="c++" label="C++" />} />
              <Route path="/sql" element={<SqlCompiler />} />
              <Route path="/react" element={<ReactCompiler />} />
              <Route path="/angular" element={<AngularCompiler />} />
              <Route path="/quiz" element={<QuizTopics />} />
              <Route path="/quiz/:topic" element={<QuizTopics />} /> {/* Redirect or show levels? For now re-use topics or make separate */}
              <Route path="/quiz/:topic/:level" element={<Quiz />} />
              <Route path="/problems" element={<ProblemsTopics />} />
              <Route path="/problems/:topic" element={<ProblemsList />} />
              <Route path="/problems/:topic/:problemId" element={<ProblemDetail />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}


export default App;
