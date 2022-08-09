import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import InputField from "./InputField";

const SignUpForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(Boolean);

  const { signUp, loading, setLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!checked || password !== confirmPassword) return;
    signUp(email, password, userName);
    navigate("/profile/user");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 mt-10 lg:mt-0 lg:flex-1"
    >
      <InputField
        type="text"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
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
      <InputField
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <div className="flex items-center">
        <InputField
          type="checkbox"
          value={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <span className="text-cyan-500 text-sm font-medium ml-2">
          I agree with terms and services.
        </span>
      </div>
      <button
        type="submit"
        className="px-5 py-2 mt-5 bg-zinc-900 text-cyan-300 text-sm hover:bg-zinc-800"
      >
        {loading ? "Loading.." : "Sign Up"}
      </button>
      <p className="text-xs text-white font-medium self-center">
        or{" "}
        <Link
          to="/login"
          className="text-purple-300 hover:underline hover:decoration-21hover:decoration-purple-300"
        >
          already have an account?
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;
