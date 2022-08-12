import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Protect = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Navigate to="/" /> : <Outlet />;
};

export default Protect;
