import styled from "styled-components";

export const NavStyled = styled.nav`
  /* padding: 2.375rem 5rem 2.375rem 7.6875rem; */
  padding: 2.375rem 0 2.375rem 7.6875rem;
  position: relative;
  z-index: 10;

  @media (max-width: 1024px) {
    padding: 2.4375rem 0 2.4375rem 3rem;
  }

  &::after {
    content: "";
    position: absolute;
    width: 1000%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(40.7742px);
    top: 0;
    left: 0;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    width: 29.5623rem;
    height: 0.0625rem;
    background-color: var(--clr-white);
    opacity: 0.25;
    top: 50%;
    left: -27.6875rem;
    z-index: 100;

    @media (max-width: 1385px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    height: 100vh;
    width: 70%;
    top: 0;
    right: 0;
    bottom: 0;
    transform: ${(prop) =>
      prop.isOpen ? "translateX(0) " : "translateX(100%)"};
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
`;

export const NavItems = styled.ul`
  display: flex;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding: 7.375rem 2rem;
  }
`;

export const NavList = styled.li`
  display: flex;
  gap: 0.6875rem;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.1875rem;
    left: 0%;
    bottom: -1rem;
    background-color: var(--clr-white);
    opacity: ${(prop) => (prop.active ? 1 : 0)};
    z-index: 100;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    @media (min-width: 768px) {
      bottom: -2.3125rem;
    }
  }

  &:hover::after {
    opacity: 1;
  }

  span,
  a {
    font-family: var(--font-secondary);
    font-size: 1rem;
    color: var(--clr-white);
    letter-spacing: 0.16875rem;
    text-transform: uppercase;
    z-index: 10;
  }

  span {
    font-weight: bold;

    @media (min-width: 768px) and (max-width: 1023px) {
      display: none;
    }
  }

  a {
    font-weight: 400;
  }
`;
