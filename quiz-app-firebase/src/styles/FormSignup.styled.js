import styled from "styled-components";

export const StyledSignupForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 38rem;
`;

export const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const StyledCheckboxInput = styled.input``;

export const StyledCheckboxText = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--light-secondary);
  opacity: 0.8;
`;

export const StyledFormText = styled(StyledCheckboxText)`
  align-self: center;

  a {
    color: var(--light-primary);
    opacity: 1;
    text-decoration: underline;
  }
`;

export const StyledError = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  color: red;
  padding: 0.5rem;
  background-color: var(--light-primary);
`;
