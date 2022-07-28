import styled from "styled-components";

import bgMobile from "./../images/bg-boost-mobile.svg";
import desktopMobile from "./../images/bg-boost-desktop.svg";

export const StyledBoost = styled.section`
  padding: 10rem 0;
  text-align: center;
  background-image: url(${bgMobile});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: var(--dark-violet);

  @media (min-width: 768px) {
    padding: 7rem 0;
    background-image: url(${desktopMobile});
  }

  button {
    padding: 1rem 3rem;
    border-radius: 10rem;
  }
`;

export const BoostTitle = styled.h2`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 1.8rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;
