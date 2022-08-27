import {
  StyledInputField,
  StyledInputContainer,
  StyledInputLabel,
} from "../styles/InputField.styled";

import { forwardRef } from "react";

const InputField = forwardRef((props, ref) => {
  const { icon, whatFor, ...rest } = props;
  return (
    <StyledInputContainer>
      <StyledInputField ref={ref} id={whatFor} {...rest} required />
      <StyledInputLabel htmlFor={whatFor}>{icon}</StyledInputLabel>
    </StyledInputContainer>
  );
});

export default InputField;
