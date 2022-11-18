import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeActive, changeToggleItem } from "../features/toggleSlice";
import { ContentStyled } from "../styles/TechnologyContentInfo.styled";
import {
  TechnologyContentInfoStyled,
  TechTabContainerStyled,
} from "../styles/TechnologyContentInfo.styled";
import {
  BodyText,
  HeadingThree,
  SubHeadingTwo,
} from "../styles/Typography.styled";
import TechTabButton from "./TechTabButton";
import { motion } from "framer-motion";

const TechnologyContentInfo = () => {
  const { currentTechnology, technology } = useSelector(
    (state) => state.toggle
  );
  const dispatch = useDispatch();
  const { name, images, description } = currentTechnology;

  return (
    <TechnologyContentInfoStyled>
      {technology.map((item) => {
        if (item.active) {
          return (
            <React.Fragment key={nanoid()}>
              <motion.picture
                initial={{ y: "-50px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <source
                  media="(min-width: 1024px)"
                  srcSet={images.portrait}
                ></source>
                <img src={images.landscape} alt="techImage" />
              </motion.picture>
              <TechTabContainerStyled>
                {technology.map((item, index) => {
                  return (
                    <TechTabButton
                      key={nanoid()}
                      text={index + 1}
                      handleClick={() => {
                        dispatch(
                          changeToggleItem({
                            index,
                            current: "currentTechnology",
                            currentItems: "technology",
                          })
                        );
                        dispatch(
                          changeActive({ index, currentItems: "technology" })
                        );
                      }}
                      isActive={item.active}
                    />
                  );
                })}
              </TechTabContainerStyled>
              <ContentStyled>
                <SubHeadingTwo as="h6">the terminology...</SubHeadingTwo>
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
                  {description}
                </BodyText>
              </ContentStyled>
            </React.Fragment>
          );
        }
      })}
    </TechnologyContentInfoStyled>
  );
};

export default TechnologyContentInfo;
