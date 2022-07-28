import {
  AdvanceDesc,
  AdvanceTitle,
  StyledAdvance,
} from "../assets/styles/Advance.styled";
import Card from "./Card";

const Advance = () => {
  return (
    <StyledAdvance>
      <AdvanceTitle>Advanced Statistics</AdvanceTitle>
      <AdvanceDesc>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </AdvanceDesc>
      <Card />
    </StyledAdvance>
  );
};

export default Advance;
