import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeActive, changeToggleItem } from "../features/toggleSlice";
import {
  CrewContentStyled,
  CrewSliderButtonContainer,
} from "../styles/CrewContent.styled";
import {
  ContentStyled,
  CrewSliderStyled,
  ImageStyled,
} from "../styles/CrewSlide.styled";
import {
  BodyText,
  HeadingFour,
  HeadingThree,
  Headline,
} from "../styles/Typography.styled";
import CrewSliderButton from "./CrewSliderButton";

const CrewContent = () => {
  const { currentCrew, crew } = useSelector((state) => state.toggle);
  const { name, images, role, bio } = currentCrew;
  const dispatch = useDispatch();

  return (
    <CrewContentStyled>
      <Headline>
        <span>02</span> meet your crew
      </Headline>

      <CrewSliderStyled>
        {crew.map((item) => {
          if (item.active) {
            return (
              <React.Fragment key={nanoid()}>
                <ImageStyled
                  initial={{ y: "-50px", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <img src={images.png} alt="crew" />
                </ImageStyled>

                <CrewSliderButtonContainer>
                  {crew.map((btn, index) => {
                    return (
                      <CrewSliderButton
                        key={nanoid()}
                        isActive={btn.active}
                        handleClick={() => {
                          dispatch(
                            changeToggleItem({
                              index,
                              current: "currentCrew",
                              currentItems: "crew",
                            })
                          );
                          dispatch(
                            changeActive({ index, currentItems: "crew" })
                          );
                        }}
                      />
                    );
                  })}
                </CrewSliderButtonContainer>

                <ContentStyled>
                  <HeadingFour
                    initial={{ y: "-50px", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                  >
                    {role}
                  </HeadingFour>
                  <HeadingThree
                    initial={{ y: "-50px", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                  >
                    {name}
                  </HeadingThree>
                  <BodyText
                    initial={{ y: "-50px", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                  >
                    {bio}
                  </BodyText>
                </ContentStyled>
              </React.Fragment>
            );
          }
        })}
      </CrewSliderStyled>
    </CrewContentStyled>
  );
};

export default CrewContent;
