import styled from "styled-components";
import StyledContainer from "./Container.styled";

export const StyledHero = styled.section`
  ${StyledContainer}
  padding-bottom: 15rem;

  button {
    padding: 1rem 3rem;
    border-radius: 10rem;
  }

  @media (min-width: 768px) {
    padding: 5rem 2rem 18rem 2rem;
    display: grid;
    grid-template-columns: 1fr 40rem;
    grid-auto-flow: dense;
    direction: rtl;
    align-items: center;
  }

  @media (min-width: 998px) {
    padding: 8rem 2rem 23rem 2rem;
  }
`;

export const StyledHeroBg = styled.div`
  position: relative;
  max-width: 50rem;
`;

export const StyledHeroImage = styled.img`
  max-width: 150%;
  margin: 0 auto;

  @media (min-width: 768px) {
    position: absolute;
    max-width: 100%;
    top: 50%;
    left: 8rem;
    transform: translateY(-50%) scale(1.2);
  }

  @media (min-width: 868px) {
    transform: translateY(-50%);
  }

  @media (min-width: 998px) {
    left: 16rem;
    transform: translateY(-40%) scale(1.2);
  }
`;

export const StyledHeroContent = styled.div`
  margin-top: 3rem;
  text-align: center;

  @media (min-width: 768px) {
    margin-top: 0;
    text-align: left;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3.8rem;
  color: var(--very-dark-blue);
  line-height: 1.2;

  @media (min-width: 998px) {
    font-size: 5.2rem;
  }
`;

export const HeroDisc = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--cyan);
  max-width: 40rem;
  margin: 1.2rem auto 2.2rem auto;

  @media (min-width: 998px) {
    margin: 0.5rem 0 2.2rem 0;
  }
`;
