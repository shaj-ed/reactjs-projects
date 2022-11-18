import styled from "styled-components";
import { motion } from "framer-motion";

export const TabNavList = styled.ul`
  display: flex;
  gap: 1.688rem;
  align-items: center;
  justify-content: center;
  margin: 1.625rem 0 2rem 0;

  @media (min-width: 768px) {
    margin: 3.313rem 0 2.938rem 0;
  }

  @media (min-width: 1024px) {
    justify-content: start;
    margin: 0 0 3.25rem 0;
  }

  button {
    width: 100%;
  }
`;

export const TabListItem = styled(motion.li)`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.6rem;
    width: 100%;
    height: ${(prop) => (prop.isActive ? "0.188rem" : 0)};
    background-color: var(--clr-white);
    opacity: 1;
    transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &:hover::after {
    opacity: 0.5;
    height: 0.188rem;
  }
`;
