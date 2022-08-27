import styled from "styled-components";

export const StyledQuizPage = styled.main`
  padding: 5rem 2rem 2rem 2rem;
  height: calc(100vh - 7rem);
  display: flex;
  flex-direction: column;
`;

export const StyledQuizQuestion = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--light-secondary);
  opacity: 0.9;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const StyledQuizOptions = styled.div`
  width: 100%;
  max-width: 38rem;
  margin: 0 auto;

  label:not(:first-of-type) {
    margin-top: 1.5rem;
  }

  @media (min-width: 768px) {
    margin: initial;
  }
`;
