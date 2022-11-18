import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Heading = css`
  font-family: var(--font-primary);
  font-weight: 400;
  color: var(--clr-white);
  text-transform: uppercase;
`;

export const HeadingOne = styled.h1`
  ${Heading}
  font-size: 5rem;

  @media (min-width: 768px) {
    font-size: 9.375rem;
  }
`;

export const HeadingTwo = styled(motion.h2)`
  ${Heading}
  font-size: 3.5rem;

  @media (min-width: 768px) {
    font-size: 5rem;
  }

  @media (min-width: 1024px) {
    font-size: 6.25rem;
  }
`;

export const HeadingThree = styled(motion.h3)`
  ${Heading}
  font-size: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;

export const HeadingFour = styled(motion.h4)`
  ${Heading}
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const HeadingFive = styled.h5`
  font-family: var(--font-secondary);
  font-size: 1rem;
  font-weight: 400;
  color: var(--clr-light);
  text-transform: uppercase;
  letter-spacing: 0.296875rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.75rem;
  }
`;

export const BodyText = styled(motion.p)`
  font-family: var(--font-body);
  font-size: 0.9375;
  font-weight: 400;
  color: var(--clr-light);
  line-height: 2rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.125rem;
  }
`;

export const SubHeadingOne = styled.h3`
  ${Heading}
  font-size: 1.75rem;
`;

export const SubHeadingTwo = styled(HeadingFive)`
  letter-spacing: 0.148rem;
  font-size: 0.875rem;
`;

export const TabNavItem = styled.button`
  background: transparent;
  font-size: 1rem;
  font-family: var(--font-secondary);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.169rem;
  color: ${(prop) => (prop.isActive ? "var(--clr-white)" : "var(--clr-light)")};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

export const Headline = styled(HeadingFive)`
  @media (min-width: 768px) {
    text-align: left;
  }
`;
