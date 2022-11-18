import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  BarStyled,
  DestinationInfoStyled,
  DistanceStyled,
  TimeStyled,
} from "../styles/DestinationInfo.styled";
import {
  BodyText,
  HeadingTwo,
  SubHeadingOne,
  SubHeadingTwo,
} from "../styles/Typography.styled";
import TabNav from "./TabNav";
import { motion } from "framer-motion";

const DestinationInfo = () => {
  const { currentDestination, destinations } = useSelector(
    (state) => state.toggle
  );
  // const { name, images, description, distance, travel } = currentDestination;

  return (
    <DestinationInfoStyled>
      {destinations.map((item) => {
        if (item.active) {
          const { name, images, description, distance, travel } = item;
          return (
            <React.Fragment key={nanoid()}>
              <motion.img
                src={images.png}
                alt="moon"
                initial={{ y: "-50px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              />
              <div>
                <TabNav />
                <HeadingTwo
                  initial={{ y: "-50px", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  {name}
                </HeadingTwo>
                <BodyText
                  initial={{ y: "-50px", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  {description}
                </BodyText>
                <BarStyled />
                <DistanceStyled
                  initial={{ y: "-50px", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <SubHeadingTwo>avg. distance</SubHeadingTwo>
                  <SubHeadingOne>{distance}</SubHeadingOne>
                </DistanceStyled>
                <TimeStyled
                  initial={{ y: "-50px", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <SubHeadingTwo>est. travel time</SubHeadingTwo>
                  <SubHeadingOne>{travel}</SubHeadingOne>
                </TimeStyled>
              </div>
            </React.Fragment>
          );
        }
      })}
      {/* <img src={images.png} alt="moon" />
      <div>
        <TabNav />
        <HeadingTwo>{name}</HeadingTwo>
        <BodyText>{description}</BodyText>
        <BarStyled />
        <DistanceStyled>
          <SubHeadingTwo>avg. distance</SubHeadingTwo>
          <SubHeadingOne>{distance}</SubHeadingOne>
        </DistanceStyled>
        <TimeStyled>
          <SubHeadingTwo>est. travel time</SubHeadingTwo>
          <SubHeadingOne>{travel}</SubHeadingOne>
        </TimeStyled>
      </div> */}
    </DestinationInfoStyled>
  );
};

export default DestinationInfo;
