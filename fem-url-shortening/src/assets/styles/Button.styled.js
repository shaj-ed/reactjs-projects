import styled from "styled-components";

export const StyledButton = styled.button`
  font-family: var(--font-stack);
  font-size: 1.4rem;
  font-weight: 700;
  background-color: ${(props) =>
    props.primary ? "var(--cyan)" : "transparent"};
  color: ${(props) => (props.primary ? "white" : props.color)};

  &:hover {
    opacity: 0.7;
  }
`;
