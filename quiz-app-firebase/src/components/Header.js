import {
  Logo,
  StyledHeader,
  StyledButtonContainer,
  StyledHeaderWrapper,
} from "../styles/Header.styled";
import {
  LinkLight,
  LinkBluish,
  StyledButtonDark,
} from "../styles/ButtonLink.styled";
import User from "./User";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, signout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    signout();
    navigate("/");
  };

  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <Logo to="/">QuickQuiz.</Logo>
        {!user ? (
          <StyledButtonContainer>
            <LinkLight to="/login">Login</LinkLight>
            <LinkBluish to="/signup">Signup</LinkBluish>
          </StyledButtonContainer>
        ) : (
          <>
            <User user={user} />
            <StyledButtonDark
              as="button"
              type="button"
              onClick={handleLogout}
              style={{ width: "initial" }}
            >
              logout
            </StyledButtonDark>
          </>
        )}
      </StyledHeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
