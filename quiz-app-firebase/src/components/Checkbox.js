import {
  StyledLabel,
  StyledCheckboxText,
  StyledCheckboxInput,
} from "../styles/Checkbox.styled";

const Checkbox = ({ text, ...rest }) => {
  return (
    <StyledLabel>
      <StyledCheckboxInput type="checkbox" {...rest} />
      <StyledCheckboxText>{text}</StyledCheckboxText>
    </StyledLabel>
  );
};

export default Checkbox;
