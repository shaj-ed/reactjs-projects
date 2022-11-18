import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderStyled = styled(motion.header)`
  width: 100%;
  /* max-width: 76.25rem; */
  /* margin-inline: auto; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  z-index: 1000;
  position: relative;

  @media (min-width: 768px) {
    padding: 0 2.5rem;
  }

  @media (min-width: 1024px) {
    padding: 2.5rem 3.4375rem 0 3.4375rem;
  }

  @media (min-width: 1385px) {
    padding: 2.5rem 0 0 0;
  }
`;

export const Hamburger = styled.button`
  background-color: transparent;
  width: 1.5rem;
  gap: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 100;

  @media (min-width: 768px) {
    display: none;
  }

  span {
    width: 100%;
    height: 0.1875rem;
    background-color: var(--clr-light);
    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:nth-of-type(1) {
      transform: ${(prop) => (prop.isOpen ? "rotate(48deg)" : null)};
      transform-origin: left;
    }

    &:nth-of-type(2) {
      opacity: ${(prop) => (prop.isOpen ? 0 : 1)};
    }

    &:nth-of-type(3) {
      transform: ${(props) => (props.isOpen ? "rotate(-48deg)" : null)};
      transform-origin: left;
    }
  }
`;
