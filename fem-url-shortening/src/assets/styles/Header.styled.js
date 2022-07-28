import styled from "styled-components";
import StyledContainer from "./Container.styled";

export const StyledHeader = styled.header`
  ${StyledContainer}
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 100;

  @media (min-width: 768px) {
    gap: 5rem;
    justify-content: start;
  }
`;

export const Hamburger = styled.button`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  background-color: transparent;

  span {
    width: 2.5rem;
    height: 0.3rem;
    background-color: var(--grayish-violet);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    width: initial;
    flex-direction: column;
    align-items: stretch;
    position: absolute;
    top: ${(props) => (props.show ? "8rem" : "-50rem")};
    left: 2rem;
    right: 2rem;
    padding: 3.5rem 2rem;
    background-color: var(--dark-violet);
    border-radius: 1rem;
    opacity: ${(props) => (props.show ? "1" : "0")};
    z-index: 10;
    transition: all 0.4s ease-in-out;
  }
`;

export const NavContainer = styled.ul`
  display: flex;
  gap: 2.5rem;

  @media (max-width: 767px) {
    flex-direction: column;
    text-align: center;
    padding-bottom: 4.5rem;
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.2);
  }
`;

export const NavLink = styled.li`
  a {
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: capitalize;
    color: var(--cyan);
    transition: all 0.3s ease-in-out;

    &:hover {
      color: var(--dark-violet);
    }
  }

  @media (max-width: 767px) {
    a {
      font-size: 1.6rem;
      color: white;
    }
  }
`;

export const StyledMenuButtonContainer = styled.div`
  margin-left: auto;
  display: flex;
  gap: 2.5rem;

  button:nth-of-type(2) {
    padding: 0.8rem 2rem;
    border-radius: 5rem;
  }

  button:nth-of-type(1) {
    color: var(--cyan);
  }

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 1rem;
    margin-top: 2rem;
    margin-left: initial;

    button:nth-of-type(1) {
      color: #fff;
    }
  }
`;
