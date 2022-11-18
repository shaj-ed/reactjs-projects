import React from "react";
import DestinationContent from "../components/DestinationContent";
import Header from "../components/Header";
import { DestinationStyled } from "../styles/Destination.styled";
import { Container } from "../styles/Layout.styled";

const Destination = () => {
  return (
    <DestinationStyled
      initial={{ opacity: 0, y: "-150px" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-50px", transition: { duration: 0.2 } }}
      transition={{ duration: 0.2, delay: 0.3 }}
    >
      <Container>
        <Header />
        <DestinationContent />
      </Container>
    </DestinationStyled>
  );
};

export default Destination;
