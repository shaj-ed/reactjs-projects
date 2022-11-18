import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleNav } from "../features/navSlice";
import { Hamburger, HeaderStyled } from "../styles/Header.styled";
import logo from "./../assets/shared/logo.svg";
import Nav from "./Nav";

const Header = () => {
  const { isOpen } = useSelector((state) => state.nav);
  const dispatch = useDispatch();

  return (
    <HeaderStyled
      initial={{ opacity: 0, y: "-50%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Hamburger isOpen={isOpen} onClick={() => dispatch(toggleNav())}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <Nav />
    </HeaderStyled>
  );
};

export default Header;
