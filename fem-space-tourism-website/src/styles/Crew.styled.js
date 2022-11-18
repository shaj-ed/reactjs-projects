import styled from "styled-components";
import backgroundMobile from "./../assets/crew/background-crew-mobile.jpg";
import backgroundTablet from "./../assets/crew/background-crew-tablet.jpg";
import backgroundDesktop from "./../assets/crew/background-crew-desktop.jpg";
import { Container } from "./Layout.styled";
import { motion } from "framer-motion";

export const CrewStyled = styled(motion.main)`
  background-image: url(${backgroundMobile});

  @media (min-width: 768px) {
    background-image: url(${backgroundTablet});
  }

  @media (min-width: 1024px) {
    height: 100%;
    background-image: url(${backgroundDesktop});
  }
`;

export const CrewContainer = styled(Container)`
  height: 100%;
`;
