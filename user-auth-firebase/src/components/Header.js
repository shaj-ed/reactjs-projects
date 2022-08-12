import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { currentUser, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  return (
    <header className="flex justify-between w-full p-2  max-w-lg mx-auto">
      <Link to="/" className="text-3xl text-white font-semibold">
        Logo
      </Link>

      {currentUser ? (
        <div className="flex items-center gap-5">
          <h2 className="text-md font-medium">{currentUser.displayName}</h2>
          <button
            type="button"
            className="px-2 py-2 text-xs font-medium bg-slate-400 text-slate-900"
            onClick={handleLogOut}
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-5">
          <Link to="/login" className="p-1 text-slate-300 font-medium">
            Login
          </Link>

          <Link
            to="/signup"
            className="py-1 px-2 bg-slate-900 text-slate-200 font-medium"
          >
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
