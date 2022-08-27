import {
  StyledSignupForm,
  StyledCheckbox,
  StyledCheckboxText,
  StyledCheckboxInput,
  StyledFormText,
  StyledError,
} from "../styles/FormSignup.styled";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import InputField from "./InputField";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StyledButton } from "../styles/ButtonLink.styled";
import { useAuth } from "../context/AuthContext";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState({ isError: false, type: "", text: "" });

  const { signup, loading, isError } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.length <= 2) {
      setError({
        isError: true,
        type: "username",
        text: "Username should have atleast three characters.",
      });
    } else if (password.length < 6) {
      setError({
        isError: true,
        type: "password",
        text: "Password should have atleast six characters.",
      });
    } else if (password !== confirmPassword) {
      setError({
        isError: true,
        type: "confirmPassword",
        text: "Didn't match password.",
      });
    } else if (!agree) {
      setError({
        isError: true,
        type: "agree",
        text: "Checked this box.",
      });
    } else {
      await signup(email, password, username);
      navigate("/");
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAgree(false);
    }
  };

  useEffect(() => {
    setError((prev) => ({ ...prev, isError: false }));
  }, [username, email, password, confirmPassword, agree]);

  return (
    <StyledSignupForm onSubmit={handleSubmit}>
      <InputField
        type="text"
        whatFor="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        icon={<BiUserCircle />}
      />
      {error.isError && error.type === "username" && (
        <StyledError>{error.text}</StyledError>
      )}
      <InputField
        type="email"
        whatFor="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon={<AiOutlineMail />}
      />
      <InputField
        type="password"
        whatFor="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        icon={<RiLockPasswordLine />}
      />
      {error.isError && error.type === "password" && (
        <StyledError>{error.text}</StyledError>
      )}
      <InputField
        type="password"
        whatFor="confirmPassword"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        icon={<RiLockPasswordLine />}
      />
      {error.isError && error.type === "confirmPassword" && (
        <StyledError>{error.text}</StyledError>
      )}
      <StyledCheckbox>
        <StyledCheckboxInput
          type="checkbox"
          value={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        <StyledCheckboxText>
          I agree with terms and contditions.
        </StyledCheckboxText>
      </StyledCheckbox>
      {error.isError && error.type === "agree" && (
        <StyledError>{error.text}</StyledError>
      )}
      <StyledButton as="button" type="submit" disabled={loading}>
        {loading ? "Creating account.." : "Submit"}
      </StyledButton>
      <StyledFormText>
        or <Link to="/login">already have an account?</Link>
      </StyledFormText>
      {isError && (
        <StyledError>Sorry didn't create account, try again!</StyledError>
      )}
    </StyledSignupForm>
  );
};

export default SignupForm;
