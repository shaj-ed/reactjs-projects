import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const User = () => {
  const { currentUser, error } = useAuth();
  const { logOut, loading } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    logOut();
    navigate("/login");
  };

  const backToHome = () => {
    navigate("/login");
  };

  if (loading) {
    return <h3 className="text-4xl text-center text-white">Wait a sec..</h3>;
  }

  if (error || !currentUser) {
    return (
      <div className="text-center">
        <h3 className="text-xl text-center text-white">
          Something went wrong..
        </h3>
        <button
          type="button"
          className="mt-10 px-10 py-2 bg-zinc-900 text-zinc-200 font-medium text-md"
          onClick={backToHome}
        >
          Back To Home
        </button>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h3 className="text-4xl text-white">{currentUser.displayName}</h3>
      <p className="text-xl text-white">{currentUser.email}</p>
      <button
        type="button"
        className="mt-10 px-10 py-2 bg-zinc-900 text-zinc-200 font-medium text-md"
        onClick={handleClick}
      >
        Log Out
      </button>
    </div>
  );
};

export default User;
