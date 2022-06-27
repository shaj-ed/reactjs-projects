import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { AppContext } from "../../Context/appContext";

import Slider from "../Slider";

const Lightbox = () => {
  const { openLightbox, setOpenLightbox } = useContext(AppContext);

  const handleClick = () => {
    setOpenLightbox(false);
  };

  return (
    <section className={openLightbox ? "lightbox open" : "lightbox"}>
      <div className="lightbox__inner">
        <Slider />
        <button
          type="button"
          className="lightbox__delete"
          onClick={handleClick}
        >
          <IoClose />
        </button>
      </div>
    </section>
  );
};

export default Lightbox;
