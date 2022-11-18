import React from "react";
import {
  ContentStyled,
  CrewSliderStyled,
  ImageStyled,
} from "../styles/CrewSlide.styled";
import {
  BodyText,
  HeadingFour,
  HeadingThree,
} from "../styles/Typography.styled";

const CrewSlider = ({ info }) => {
  const { name, images, role, bio } = info;

  return (
    <CrewSliderStyled>
      <ImageStyled>
        <img src={images.png} alt="crew" />
      </ImageStyled>
      <ContentStyled>
        <HeadingFour>{role}</HeadingFour>
        <HeadingThree>{name}</HeadingThree>
        <BodyText>{bio}</BodyText>
      </ContentStyled>
    </CrewSliderStyled>
  );
};

export default CrewSlider;
