import { v4 as uuid } from "uuid";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

const Rating = ({ classes, star }) => {
  const starsArray = [];
  for (let i = 1; i <= 5; i++) {
    starsArray.push(star >= i);
  }

  return (
    <div className={`flex ${classes}`}>
      {starsArray.map((item) => (
        <span key={uuid()}>{item ? <AiTwotoneStar /> : <AiOutlineStar />}</span>
      ))}
    </div>
  );
};

export default Rating;
