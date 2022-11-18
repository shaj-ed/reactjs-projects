import styled from "styled-components";
import { ContentWrapper } from "./Layout.styled";

export const CrewContentStyled = styled(ContentWrapper)`
  @media (min-width: 768px) {
    padding-bottom: 0;
  }

  @media (min-width: 1024px) {
    height: 80%;
    padding-bottom: 0;
  }
`;

export const CrewSliderButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 2rem auto;

  @media (min-width: 768px) {
    margin: 2.5rem auto;
  }

  @media (min-width: 1024px) {
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;
