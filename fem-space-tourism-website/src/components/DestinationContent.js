import React from "react";
import { DestinationContentStyled } from "../styles/DestinationContent.styled";
import { Headline } from "../styles/Typography.styled";
import DestinationInfo from "./DestinationInfo";

const DestinationContent = () => {
  return (
    <DestinationContentStyled>
      <Headline>
        <span>01</span> Pick your destination
      </Headline>
      <DestinationInfo />
    </DestinationContentStyled>
  );
};

export default DestinationContent;
