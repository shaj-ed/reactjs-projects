import styled from "styled-components";
import backgroundMobile from "./../assets/destination/background-destination-mobile.jpg";
import backgroundTablet from "./../assets/destination/background-destination-tablet.jpg";
import backgroundDesktop from "./../assets/destination/background-destination-desktop.jpg";
import { motion } from "framer-motion";

export const DestinationStyled = styled(motion.main)`
  background-image: url(${backgroundMobile});

  @media (min-width: 768px) {
    background-image: url(${backgroundTablet});
  }

  @media (min-width: 1024px) {
    background-image: url(${backgroundDesktop});
  }
`;
