import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  padding: 2rem;
  background-color: var(--dark-secondary);
`;

export const StyledHeaderWrapper = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  color: var(--light-secondary);
`;

export const StyledButtonContainer = styled.div`
  a:not(:last-of-type) {
    margin-right: 1.5rem;
  }
`;
