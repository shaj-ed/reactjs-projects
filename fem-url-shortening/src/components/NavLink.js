import { NavContainer, NavLink } from "../assets/styles/Header.styled";
const navItem = ["features", "pricing", "resources"];

const NavLinks = () => {
  return (
    <NavContainer>
      {navItem.map((item, index) => {
        return (
          <NavLink key={index}>
            <a href="##">{item}</a>
          </NavLink>
        );
      })}
    </NavContainer>
  );
};

export default NavLinks;
