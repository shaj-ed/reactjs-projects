import React from "react";
import { ExploreButton, HomeContentStyled } from "../styles/HomeContent.styled";
import { BodyText, HeadingFive, HeadingOne } from "../styles/Typography.styled";

const HomeContent = () => {
  return (
    <HomeContentStyled>
      <div>
        <HeadingFive>so you want to travel to</HeadingFive>
        <HeadingOne>space</HeadingOne>
        <BodyText>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </BodyText>
      </div>
      <ExploreButton to="/destination">explore</ExploreButton>
    </HomeContentStyled>
  );
};

export default HomeContent;
