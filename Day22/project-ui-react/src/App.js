import { Routes, Route } from "react-router-dom";
import './App.css';
import { useContext } from "react";

import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import QuestionPage from "./pages/QuestionPage";
import ScorePage from "./pages/ScorePage";
import UserHistory from "./pages/UserHistory";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { UserContext } from "./context/UserContext";

function App() {
  const { loggedInUser } = useContext(UserContext);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/admin" element={<AdminPage />} />

      <Route element={<ProtectedRoutes auth={loggedInUser.isLoggedIn} />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/questions/:id" element={<QuestionPage />} />
        <Route path="/score/:score" element={<ScorePage />} />
        <Route path="/history" element={<UserHistory />} />
      </Route>
    </Routes>
  );
}

export default App;
