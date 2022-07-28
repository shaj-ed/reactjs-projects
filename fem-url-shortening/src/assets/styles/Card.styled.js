import styled from "styled-components";

export const CardContainer = styled.div`
  margin-top: 10rem;
  position: relative;
  display: grid;
  gap: 10rem;

  @media (min-width: 998px) {
    align-items: start;
    gap: 3rem;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StyledCard = styled.article`
  max-width: 33rem;
  margin: 0 auto;
  padding: 3rem;
  text-align: center;
  background-color: white;
  border-radius: 0.5rem;
  position: relative;
  z-index: 5;

  @media (min-width: 998px) {
    text-align: left;

    :nth-of-type(2) {
      margin-top: 4rem;
    }

    :nth-of-type(3) {
      margin-top: 8rem;
    }
  }
`;

export const CardImage = styled.div`
  width: 8.5rem;
  height: 8.5rem;
  margin: -7rem auto 3rem auto;
  background-color: var(--very-dark-blue);
  border-radius: 50%;
  position: relative;

  img {
    max-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 998px) {
    margin: -7rem 0 3rem 0;
  }
`;

export const CardTitle = styled.h3`
  font-size: 2rem;
  color: var(--very-dark-violet);
`;

export const CardText = styled.p`
  font-size: 1.4rem;
  color: var(--cyan);
  margin-top: 1rem;
`;

export const CardLine = styled.div`
  position: absolute;
  width: 0.8rem;
  height: 100%;
  background-color: var(--cyan);
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  @media (min-width: 998px) {
    width: 45%;
    height: 0.8rem;
    top: 45%;
  }
`;
