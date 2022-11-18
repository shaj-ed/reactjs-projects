import styled from "styled-components";
import backgroundMobile from "./../assets/home/background-home-mobile.jpg";
import backgroundTablet from "./../assets/home/background-home-tablet.jpg";
import backgroundDesktop from "./../assets/home/background-home-desktop.jpg";
import { Container } from "./Layout.styled";
import { motion } from "framer-motion";

export const HomeStyled = styled(motion.main)`
  background-image: url(${backgroundMobile});

  @media (min-width: 768px) {
    background-image: url(${backgroundTablet});
  }

  @media (min-width: 1024px) {
    background-image: url(${backgroundDesktop});
  }
`;

export const HomeContainer = styled(Container)`
  width: 100%;
  min-height: 100vh;
  display: grid;
  align-items: start;
`;
