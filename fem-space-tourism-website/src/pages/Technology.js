import React from "react";
import Header from "../components/Header";
import TechnologyContent from "../components/TechnologyContent";
import { Container } from "../styles/Layout.styled";
import { TechnologyStyled } from "../styles/Technology.styled";
import { Headline } from "../styles/Typography.styled";

const Technology = () => {
  return (
    <TechnologyStyled
      initial={{ opacity: 0, y: "-150px" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-50px", transition: { duration: 0.2 } }}
      transition={{ duration: 0.2, delay: 0.3 }}
    >
      <Container>
        <Header />
        <Headline>
          <span>03</span> space launch 101
        </Headline>
      </Container>
      <TechnologyContent />
    </TechnologyStyled>
  );
};

export default Technology;
