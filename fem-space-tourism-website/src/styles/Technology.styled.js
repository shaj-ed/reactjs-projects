import styled from "styled-components";
import backgroundMobile from "./../assets/technology/background-technology-mobile.jpg";
import backgroundTablet from "./../assets/technology/background-technology-tablet.jpg";
import backgroundDesktop from "./../assets/technology/background-technology-desktop.jpg";

import { motion } from "framer-motion";

export const TechnologyStyled = styled(motion.main)`
  background-image: url(${backgroundMobile});

  h5 {
    padding-left: 2.375rem;

    @media (min-width: 768px) {
      padding-top: 2.5rem;
    }

    @media (min-width: 1024px) {
      padding-top: 4.75rem;
    }

    @media (min-width: 1385px) {
      padding-left: 0;
    }
  }

  @media (min-width: 768px) {
    background-image: url(${backgroundTablet});
  }

  @media (min-width: 1024px) {
    background-image: url(${backgroundDesktop});
  }
`;
