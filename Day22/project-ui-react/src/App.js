import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import QuestionPage from "./pages/QuestionPage";
import ScorePage from "./pages/ScorePage";
import UserHistory from "./pages/UserHistory";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<HomePage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="questions" element={<QuestionPage />} />
        <Route path="score" element={<ScorePage />} />
        <Route path="history" element={<UserHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
