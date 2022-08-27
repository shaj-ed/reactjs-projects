import SignupForm from "../components/SignupForm";
import {
  StyledSignupPage,
  StyledTitleContainer,
  StyledGreetings,
  StyledTitle,
} from "../styles/SignupPage.styled";

const SignupPage = () => {
  return (
    <StyledSignupPage>
      <StyledTitleContainer>
        <StyledGreetings>wellcome.</StyledGreetings>
        <StyledTitle>
          Test your skills <br /> on QuickQuiz
        </StyledTitle>
      </StyledTitleContainer>
      <SignupForm />
    </StyledSignupPage>
  );
};

export default SignupPage;
