import styled from "styled-components";
import StyledContainer from "./Container.styled";

export const StyledFooter = styled.footer`
  padding: 5rem;
  background-color: var(--very-dark-violet);
`;

export const FooterContainer = styled.div`
  ${StyledContainer}
  display: grid;
  justify-content: center;
  gap: 5rem;
  text-align: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    text-align: left;
    justify-content: start;

    a:first-child {
      grid-column: 1/3;
    }
  }

  @media (min-width: 998px) {
    gap: 2rem;
    grid-template-columns: 25rem repeat(4, 1fr);

    a:first-child {
      grid-column: initial;
    }
  }
`;

export const FooterLinkContainer = styled.article`
  h3 {
    color: #ffffff;
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 1.8rem;
    line-height: 1;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  a {
    color: var(--grayish-violet);
    font-size: 1.4rem;
    text-transform: capitalize;

    &:hover {
      color: var(--cyan);
    }
  }

  @media (min-width: 998px) {
    /* justify-self: center; */
  }
`;

export const SocialLink = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    width: 100%;
  }

  li:hover {
    opacity: 0.7;
  }

  @media (min-width: 768px) {
    align-self: start;
  }

  @media (min-width: 998px) {
    justify-self: end;
  }
`;
