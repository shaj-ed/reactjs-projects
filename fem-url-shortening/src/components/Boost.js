import { BoostTitle, StyledBoost } from "../assets/styles/Boost.styled";
import { StyledButton } from "../assets/styles/Button.styled";

const Boost = () => {
  return (
    <StyledBoost>
      <BoostTitle>Boost your links today</BoostTitle>
      <StyledButton primary>Get Started</StyledButton>
    </StyledBoost>
  );
};

export default Boost;
