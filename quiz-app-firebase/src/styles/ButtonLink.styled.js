import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLinkButton = styled(Link)`
  font-family: inherit;
  border: 0;
  outline: 0;
  text-transform: capitalize;
  padding: 0.5rem 2rem;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.89;
  }
`;

export const LinkLight = styled(StyledLinkButton)`
  color: var(--dark-secondary);
  background-color: var(--light-secondary);
`;

export const LinkBluish = styled(StyledLinkButton)`
  color: var(--light-secondary);
  background-color: var(--dark-bluish);
`;

export const StyledButton = styled(StyledLinkButton)`
  width: 100%;
  background-color: var(--light-primary);
  padding: 0.8rem 2rem;
`;

export const StyledButtonDark = styled(StyledLinkButton)`
  width: 100%;
  color: #ddd;
  background-color: #111;
  padding: 0.8rem 2rem;
`;
