import NavLinks from "./NavLink";
import { StyledMenuButtonContainer, Nav } from "../assets/styles/Header.styled";
import { StyledButton } from "../assets/styles/Button.styled";

const Navbar = ({ show }) => {
  return (
    <Nav show={show}>
      <NavLinks />
      <StyledMenuButtonContainer>
        <StyledButton type="button">Login</StyledButton>
        <StyledButton type="button" primary>
          Sign Up
        </StyledButton>
      </StyledMenuButtonContainer>
    </Nav>
  );
};

export default Navbar;
