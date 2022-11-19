import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeContentStyled = styled.section`
  text-align: center;
  padding-inline: 1.5rem;
  width: 100%;
  max-width: 68.75rem;
  margin: 0 0 0 auto;

  @media (min-width: 768px) {
    padding: 6.625rem 0 5.625rem 0;

    p {
      max-width: 27.75rem;
      margin: 0 auto;
    }
  }

  @media (min-width: 1024px) {
    /* padding: 15.688rem 1rem 8.188rem 1rem; */
    padding-inline: 3.4375rem;
    text-align: left;
    align-self: end;
    display: flex;
    justify-content: space-between;

    p {
      max-width: 27.75rem;
      margin: 0;
    }

    button {
      margin-top: 0;
      align-self: flex-end;
    }
  }

  @media (min-width: 1385px) {
    padding-inline: 0;
  }

  h1 {
    margin-block: 1rem;

    @media (min-width: 768px) {
      margin-block: 2.5rem;
    }
  }
`;

export const ExploreButton = styled(Link)`
  margin: 5.0625rem auto 0 auto;
  display: inline-block;
  width: 9.375rem;
  height: 9.375rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background-color: var(--clr-white);
  color: var(--clr-dark);
  font-family: var(--font-primary);
  font-weight: 400;
  font-size: 1.25rem;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;

  @media (min-width: 768px) {
    margin: 9.75rem auto 0 auto;
    width: 15.125rem;
    height: 15.125rem;
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    width: 17.125rem;
    height: 17.125rem;
    margin: 9.75rem 0 0 auto;
  }

  &::before {
    content: "";
    position: absolute;
    width: 150%;
    height: 150%;
    border-radius: 50%;
    background-color: var(--clr-white);
    opacity: 0.1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(1);
  }
`;
