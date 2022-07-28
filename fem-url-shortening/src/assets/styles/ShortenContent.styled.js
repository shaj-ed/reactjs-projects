import styled from "styled-components";

export const StyledShortenContent = styled.article`
  padding: 2.2rem;
  background: #ffffff;
  border-radius: 0.5rem;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 1.6rem 2.5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr) 10rem;
    align-items: center;
    gap: 3rem;
  }

  p {
    font-size: 1.6rem;
  }

  button {
    width: 100%;
    padding: 0.8rem;
    border-radius: 0.5rem;

    @media (min-width: 768px) {
      padding: 0.6rem;
    }
  }
`;

export const TypedLink = styled.p`
  color: var(--very-dark-blue);

  @media (min-width: 768px) {
    grid-column: 1 / 3;
  }
`;

export const ShortenLink = styled.p`
  margin: 3rem 0 1.5rem 0;
  color: var(--gray);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 250%;
    height: 0.15rem;
    background-color: var(--gray);
    left: -10%;
    top: -55%;
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    justify-self: end;
    margin: 0;

    &::after {
      display: none;
    }
  }
`;
