import { StyledButton } from "../assets/styles/Button.styled";
import {
  ShortenLink,
  StyledShortenContent,
  TypedLink,
} from "../assets/styles/ShortenContent.styled";

const ShortenContent = ({ item, copyClip }) => {
  const { shortLink, originalLink, id, copy } = item;

  return (
    <StyledShortenContent>
      <TypedLink>{originalLink}</TypedLink>
      <ShortenLink>{shortLink}</ShortenLink>
      <StyledButton
        primary
        onClick={() => copyClip(id)}
        style={{ backgroundColor: copy && "#333" }}
      >
        {copy ? "Copied" : "Copy"}
      </StyledButton>
    </StyledShortenContent>
  );
};

export default ShortenContent;
