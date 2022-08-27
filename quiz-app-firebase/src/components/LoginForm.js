import { useState } from "react";
import { StyledLogin } from "../styles/FormLogin.styled";
import InputField from "./InputField";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { StyledButton } from "../styles/ButtonLink.styled";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { StyledError } from "../styles/FormSignup.styled";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      setLoading(false);
      setIsError(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setIsError(true);
      console.log(error);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <StyledLogin onSubmit={handleSubmit}>
      <InputField
        type="email"
        value={email}
        whatFor="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        icon={<AiOutlineMail />}
      />
      <InputField
        type="password"
        value={password}
        whatFor="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        icon={<RiLockPasswordLine />}
      />
      <StyledButton as="button" type="submit" disabled={loading}>
        {loading ? "Logging in.." : "Submit"}
      </StyledButton>
      {isError && <StyledError>Login Failed, please try again!</StyledError>}
    </StyledLogin>
  );
};

export default LoginForm;
