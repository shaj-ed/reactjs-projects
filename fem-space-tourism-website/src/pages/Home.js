import { AnimatePresence } from "framer-motion";
import React from "react";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
import { HomeContainer, HomeStyled } from "../styles/Home.styled";

const Home = () => {
  return (
    <HomeStyled
      initial={{ opacity: 0, y: "-150px" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-50px", transition: { duration: 0.2 } }}
      transition={{ duration: 0.2, delay: 0.3 }}
    >
      <HomeContainer>
        <Header />
        <HomeContent />
      </HomeContainer>
    </HomeStyled>
  );
};

export default Home;
