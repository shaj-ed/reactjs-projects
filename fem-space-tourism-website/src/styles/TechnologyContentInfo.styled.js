import styled from "styled-components";

export const TechnologyContentInfoStyled = styled.article`
  padding-top: 2rem;

  img {
    width: 100%;
    /* height: 10.625rem; */
  }

  @media (min-width: 768px) {
    padding-top: 3.75rem;
  }

  @media (min-width: 1024px) {
    pading-top: 1.625rem;
    padding-left: 5vw;
    display: grid;
    grid-template-columns: auto, 1fr, 32.188rem;
    text-align: left;
    justify-content: space-between;

    picture {
      grid-column: 3 / 4;
      grid-row: 1 / 2;
      height: 527px;
      height: 100%;
    }
  }

  @media (min-width: 1385px) {
    padding-left: 13vw;
  }
`;

export const ContentStyled = styled.div`
  padding-inline: 1.5rem;

  h5 {
    padding: 0;
  }

  p {
    max-width: 28.625rem;
    margin: 0 auto;
  }

  h3 {
    padding: 0.625rem 0 1rem 0;

    @media (min-width: 768px) {
      padding: 1rem 0 1rem 0;
    }
  }

  @media (min-width: 1024px) {
    grid-column: 2 / 3;
    grid-row: 1/2;
    align-self: center;

    p {
      margin: 0;
    }
  }
`;

export const TechTabContainerStyled = styled.div`
  padding: 2.125rem 0 1.625rem 0;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 3.5rem 0 2.75rem 0;
  }

  @media (min-width: 1024px) {
    padding: 0;
    gap: 2rem;
    flex-direction: column;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    align-self: center;
  }
`;
