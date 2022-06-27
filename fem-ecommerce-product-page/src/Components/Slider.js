import { useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import SliderButton from "./SliderButton";
import Thumb from "./Thumb";

import slideOne from "./../assets/images/image-product-1.jpg";
import slideTwo from "./../assets/images/image-product-2.jpg";
import slideThree from "./../assets/images/image-product-3.jpg";
import slideFour from "./../assets/images/image-product-4.jpg";
import { AppContext } from "../Context/appContext";

const slideItem = [slideOne, slideTwo, slideThree, slideFour];

const Slider = () => {
  const { setOpenLightbox, slideIndex, setSlideIndex } = useContext(AppContext);

  useEffect(() => {
    const lastIndex = slideItem.length - 1;
    if (slideIndex < 0) {
      setSlideIndex(lastIndex);
    }
    if (slideIndex > lastIndex) {
      setSlideIndex(0);
    }
    console.log(slideIndex);
  }, [slideIndex, setSlideIndex]);

  const nextSlider = () => {
    setSlideIndex(slideIndex + 1);
  };

  const prevSlider = () => {
    setSlideIndex(slideIndex - 1);
  };

  const handleLightbox = (index) => {
    setSlideIndex(index);
    setOpenLightbox(true);
  };

  return (
    <>
      <div className="slider">
        {slideItem.map((item, index) => {
          let sliderPosition = "slider__image--next";

          if (index === slideIndex) {
            sliderPosition = "slider__image--active";
          }

          if (
            index === slideIndex - 1 ||
            (slideIndex === 0 && index === slideItem.length - 1)
          ) {
            sliderPosition = "slider__image--prev";
          }

          return (
            <div
              key={uuid()}
              className={`slider__image ${sliderPosition}`}
              style={{ backgroundImage: `url(${item})` }}
              onClick={() => handleLightbox(index)}
            ></div>
          );
        })}

        <SliderButton
          icon={<IoIosArrowForward />}
          direction="next"
          handleClick={nextSlider}
        />

        <SliderButton
          icon={<IoIosArrowBack />}
          direction="prev"
          handleClick={prevSlider}
        />
      </div>

      <Thumb slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
    </>
  );
};

export default Slider;
