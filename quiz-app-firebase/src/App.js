import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import SharedLayout from "./pages/SharedLayout";
import SignupPage from "./pages/SignupPage";

const App = () => {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/login"
            element={!user ? <LoginPage /> : <Navigate to="/" />}
          />
          <Route
            path="/quiz/:id"
            element={user ? <QuizPage /> : <Navigate to="/signup" />}
          />
          <Route path="/result/:id" element={<ResultPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
