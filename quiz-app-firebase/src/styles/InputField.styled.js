import styled from "styled-components";

export const StyledInputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 4rem;
  border: 0.2rem solid var(--dark-secondary);
`;

export const StyledInputField = styled.input`
  width: 85%;
  height: 100%;
  outline: 0;
  border: 0;
  padding: 0.4rem 1.5rem;
  font-size: 1.6rem;
  font-weight: 400;
  background-color: transparent;
  color: var(--light-secondary);

  &::placeholder {
    color: var(--light-secondary);
    opacity: 0.6;
  }
`;

export const StyledInputLabel = styled.label`
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);

  svg {
    color: var(--light-secondary);
    font-size: 2.5rem;
    opacity: 0.8;
  }
`;
