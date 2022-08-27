import styled from "styled-components";

export const StyledSignupPage = styled.main`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 8rem 2rem;
  }
`;

export const StyledTitleContainer = styled.div``;

export const StyledGreetings = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--light-secondary);
  margin-bottom: 1rem;
`;

export const StyledTitle = styled.h1`
  font-size: 3.8rem;
  font-weight: 700;
  color: var(--light-secondary);
`;
