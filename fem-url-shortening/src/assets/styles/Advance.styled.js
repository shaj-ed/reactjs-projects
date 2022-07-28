import styled from "styled-components";
import StyledContainer from "./Container.styled";

export const StyledAdvance = styled.div`
  ${StyledContainer}
  padding-top: 15rem;
  padding-bottom: 10rem;
`;

export const AdvanceTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--very-dark-violet);

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const AdvanceDesc = styled.p`
  max-width: 45rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--gray);
  margin: 1rem auto;
`;
