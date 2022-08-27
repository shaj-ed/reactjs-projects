import LoginForm from "../components/LoginForm";
import { StyledLoginPage, StyledLoginTitle } from "../styles/LoginPage.styled";

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <StyledLoginTitle>Login here.</StyledLoginTitle>
      <LoginForm />
    </StyledLoginPage>
  );
};

export default LoginPage;
