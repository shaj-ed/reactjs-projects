import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Layout from "./pages/Layout";
import SignUpPage from "./pages/SignUpPage";
import { AuthProvider } from "./context/AuthContext";
import User from "./components/User";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile/user" element={<User />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
