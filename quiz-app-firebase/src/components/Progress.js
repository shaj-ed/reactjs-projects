import { StyledButton, StyledButtonDark } from "../styles/ButtonLink.styled";
import {
  StyledProgress,
  StyledProgressBar,
  StyledBar,
} from "../styles/Progress.styled";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Progress = ({
  prevQuestion,
  nextQuestion,
  percentage,
  questions,
  current,
  handleSubmit,
}) => {
  return (
    <StyledProgress>
      <StyledButton as="button" type="button" onClick={prevQuestion}>
        <IoIosArrowBack className="left" />
        Prev
      </StyledButton>
      <StyledProgressBar>
        <StyledBar percentage={percentage}></StyledBar>
      </StyledProgressBar>

      {current === questions.length - 1 ? (
        <StyledButtonDark as="button" type="submit" onClick={handleSubmit}>
          Submit
        </StyledButtonDark>
      ) : (
        <StyledButtonDark as="button" type="button" onClick={nextQuestion}>
          Next
          <IoIosArrowForward className="right" />
        </StyledButtonDark>
      )}
    </StyledProgress>
  );
};

export default Progress;
