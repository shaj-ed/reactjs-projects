import styled from "styled-components";

export const StyledLabel = styled.label`
  width: 100%;
  padding: 2rem;
  background-color: var(--dark-secondary);
  display: flex;
  gap: 3rem;
  align-items: center;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const StyledCheckboxInput = styled.input``;

export const StyledCheckboxText = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--light-secondary);
  opacity: 0.8;
`;
