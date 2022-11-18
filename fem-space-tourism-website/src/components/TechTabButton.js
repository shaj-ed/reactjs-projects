import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const TechTabButton = ({ text, handleClick, isActive }) => {
  return (
    <TechTabButtonStyled
      type="button"
      onClick={handleClick}
      isActive={isActive}
      whileTap={{ scale: 0.8 }}
    >
      {text}
    </TechTabButtonStyled>
  );
};

export default TechTabButton;

export const TechTabButtonStyled = styled(motion.button)`
  outline: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${(prop) =>
    prop.isActive ? "var(--clr-white)" : "transparent"};
  color: ${(prop) => (prop.isActive ? "var(--clr-dark)" : "var(--clr-white)")};
  border: 1px solid #999;
  display: grid;
  place-items: center;
  font-size: 1rem;
  font-family: var(--font-primary);
  font-weight: 400;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 3.75rem;
    height: 3.75rem;
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    width: 5rem;
    height: 5rem;
    font-size: 2rem;
  }
`;
