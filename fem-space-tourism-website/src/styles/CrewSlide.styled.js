import styled from "styled-components";
import { motion } from "framer-motion";

export const CrewSliderStyled = styled.article`
  padding-top: 2rem;
  padding-bottom: 6.563rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding-top: 3.75rem;
    padding-bottom: 0;
    flex-direction: column-reverse;

    p {
      max-width: 30.625rem;
      margin: 0 auto;
    }
  }

  @media (min-width: 1024px) {
    position: relative;
    height: 100%;
    padding: 0;
    flex-direction: row-reverse;
    text-align: left;
    align-items: center;
    gap: 0;
    justify-content: space-between;

    p {
      margin: 0;
    }
  }

  h4 {
    opacity: 0.5;
  }

  h3 {
    padding: 0.5rem 0 1rem 0;

    @media (min-width: 1024px) {
      padding: 0.938rem 0 1.688rem 0;
    }
  }
`;

export const ContentStyled = styled.div`
  @media (min-width: 1024px) {
    /* flex: 2; */
  }
`;

export const ImageStyled = styled(motion.div)`
  width: 100%;
  align-self: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.063rem;
    bottom: 0;
    left: 0;
    background-color: var(--clr-light);
    opacity: 0.2;

    @media (min-width: 768px) {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    align-self: end;
    flex: 1;
  }

  img {
    width: 60%;
    display: block;
    margin: 0 auto;

    @media (min-width: 768px) {
      width: 456px;
    }

    @media (min-width: 1024px) {
      margin: 0 0 0 auto;
      scale: 1.1;
    }
  }
`;
