import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import InputField from "./InputField";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { logIn, loading, setLoading } = useAuth();

  const hanldeSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    logIn(email, password);
    navigate("/");
  };

  return (
    <form onSubmit={hanldeSubmit} className="flex flex-col gap-4 mt-10">
      <InputField
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="px-5 py-2 mt-3 bg-zinc-900 text-cyan-300 text-sm hover:bg-zinc-800"
      >
        {loading ? "Loading.." : "Log In"}
      </button>
      <p className="text-xs text-white font-medium self-center">
        or
        <Link
          to="/signup"
          className="text-purple-300 hover:underline hover:decoration-21hover:decoration-purple-300"
        >
          create an account?
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
