import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { NavItems, NavList, NavStyled } from "../styles/Nav.styled";

const navItems = [
  {
    id: nanoid(),
    text: "home",
    url: "/",
  },
  {
    id: nanoid(),
    text: "destination",
    url: "/destination",
  },
  {
    id: nanoid(),
    text: "crew",
    url: "/crew",
  },
  {
    id: nanoid(),
    text: "technology",
    url: "/technology",
  },
];

const Nav = () => {
  const { isOpen } = useSelector((state) => state.nav);
  const { pathname } = useLocation();

  return (
    <NavStyled isOpen={isOpen}>
      <NavItems>
        {navItems.map((item, index) => {
          const { id, text, url } = item;
          if (pathname === url) {
            return (
              <NavList key={id} active={true}>
                <span>0{index}</span>
                <Link to={url}>{text}</Link>
              </NavList>
            );
          }
          return (
            <NavList key={id}>
              <span>0{index}</span>
              <Link to={url}>{text}</Link>
            </NavList>
          );
        })}
      </NavItems>
    </NavStyled>
  );
};

export default Nav;
