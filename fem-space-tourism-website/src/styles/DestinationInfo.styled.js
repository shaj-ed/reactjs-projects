import styled from "styled-components";
import { motion } from "framer-motion";

export const DestinationInfoStyled = styled.article`
  padding: 2rem 0 3.625rem 0;

  @media (min-width: 768px) {
    padding: 3.75rem 0 3.75rem 0;

    p {
      max-width: 35.813rem;
      margin: 0.5rem auto;
    }
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    text-align: left;
    padding-top: 4.063rem;

    p {
      width: 27.75rem;
      margin: 0.5rem 0;
    }

    div {
      justify-self: end;
    }
  }

  @media (min-width: 1385px) {
    padding: 4.063rem 0 0 4.063rem;
  }

  img {
    max-width: 170px;

    @media (min-width: 768px) {
      max-width: 300px;
    }

    @media (min-width: 1024px) {
      max-width: 445px;
    }
  }
`;

export const BarStyled = styled.hr`
  display: block;
  width: 100%;
  max-width: 35.813rem;
  height: 0.063rem;
  margin: 2.25rem auto 1.75rem auto;
  background-color: var(--clr-dark);
  opacity: 0.15;

  @media (min-width: 768px) {
    margin: 3.125rem auto 1.75rem auto;
  }

  @media (min-width: 1024px) {
    width: 27.75rem;
    margin: 3.375rem 0 1.75rem 0;
  }
`;

export const DistanceStyled = styled(motion.div)`
  margin-bottom: 2rem;

  h5 {
    margin-bottom: 0.75rem;
  }

  @media (min-width: 768px) {
    display: inline-block;
    margin: 0 6.2rem 0 0;
  }
`;

export const TimeStyled = styled(motion.div)`
  h5 {
    margin-bottom: 0.75rem;
  }

  @media (min-width: 768px) {
    display: inline-block;
  }
`;
