import {
  StyledUser,
  StyledUserImage,
  StyledUsername,
} from "../styles/User.styled";

const User = ({ user }) => {
  return (
    <StyledUser>
      <StyledUserImage></StyledUserImage>
      <StyledUsername>{user.displayName}</StyledUsername>
    </StyledUser>
  );
};

export default User;
