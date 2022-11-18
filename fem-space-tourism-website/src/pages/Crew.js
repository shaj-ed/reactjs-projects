import React from "react";
import CrewContent from "../components/CrewContent";
import Header from "../components/Header";
import { CrewContainer, CrewStyled } from "../styles/Crew.styled";

const Crew = () => {
  return (
    <CrewStyled
      initial={{ opacity: 0, y: "-150px" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-50px", transition: { duration: 0.2 } }}
      transition={{ duration: 0.2, delay: 0.3 }}
    >
      <CrewContainer>
        <Header />
        <CrewContent />
      </CrewContainer>
    </CrewStyled>
  );
};

export default Crew;
