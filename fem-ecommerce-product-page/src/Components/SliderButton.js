const SliderButton = ({ icon, direction, handleClick }) => {
  return (
    <button
      type="button"
      className={`slider-button ${direction}`}
      onClick={handleClick}
    >
      {icon}
    </button>
  );
};

export default SliderButton;
