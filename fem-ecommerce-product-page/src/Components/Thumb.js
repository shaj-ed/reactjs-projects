import { v4 as uuid } from "uuid";

import thumbOne from "./../assets/images/image-product-1-thumbnail.jpg";
import thumbTwo from "./../assets/images/image-product-2-thumbnail.jpg";
import thumbThree from "./../assets/images/image-product-3-thumbnail.jpg";
import thumbFour from "./../assets/images/image-product-4-thumbnail.jpg";

const thumbItem = [thumbOne, thumbTwo, thumbThree, thumbFour];

const Thumb = ({ slideIndex, setSlideIndex }) => {
  const handleClick = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="thumb">
      {thumbItem.map((item, index) => {
        return (
          <button
            key={uuid()}
            type="button"
            className={
              index === slideIndex ? "thumb__button active" : "thumb__button"
            }
            onClick={() => handleClick(index)}
          >
            <img src={item} alt="thumbnail" />
          </button>
        );
      })}
    </div>
  );
};

export default Thumb;
