import {
  HeroDisc,
  HeroTitle,
  StyledHero,
  StyledHeroBg,
  StyledHeroContent,
  StyledHeroImage,
} from "../assets/styles/Hero.styled";

import HeroImage from "../assets/images/illustration-working.svg";
import { StyledButton } from "../assets/styles/Button.styled";

const Hero = () => {
  return (
    <StyledHero>
      <StyledHeroBg>
        <StyledHeroImage src={HeroImage} alt="Hero" />
      </StyledHeroBg>

      <StyledHeroContent>
        <HeroTitle>
          More than just <br /> shorter links
        </HeroTitle>
        <HeroDisc>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </HeroDisc>
        <StyledButton primary>Get Started</StyledButton>
      </StyledHeroContent>
    </StyledHero>
  );
};

export default Hero;
