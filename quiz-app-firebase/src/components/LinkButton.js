import { StyledLink } from "../styles/ButtonLink.styled";

const Link = ({ text, ...rest }) => {
  return <StyledLink {...rest}>{text}</StyledLink>;
};

export default Link;
