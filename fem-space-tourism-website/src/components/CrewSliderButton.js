import React from "react";
import styled from "styled-components";

const CrewSliderButton = ({ isActive, handleClick }) => {
  return (
    <SliderButton
      type="button"
      isActive={isActive}
      onClick={handleClick}
    ></SliderButton>
  );
};

export default CrewSliderButton;

const SliderButton = styled.button`
  border: 0;
  outline: 0;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--clr-white);
  opacity: ${(prop) => (prop.isActive ? "1" : "0.17")};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;
