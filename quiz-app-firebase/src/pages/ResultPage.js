import { useLocation } from "react-router-dom";
import Analysis from "../components/Analyses";
import {
  StyledResult,
  StyledResultPage,
  StyledResultTitle,
} from "../styles/ResultPage.styled";

const ResultPage = () => {
  const { state } = useLocation();

  const userScore = () => {
    let score = 0;

    state.forEach((qna, ind) => {
      let correctIndexes = [];
      let checkedIndexes = [];

      qna.options.forEach((option, ind2) => {
        if (option.correct) {
          correctIndexes.push(ind2);
        }
        if (option.checked) {
          checkedIndexes.push(ind2);
        }
      });
      if (correctIndexes.toString() === checkedIndexes.toString()) {
        score = score + 10;
      }
    });

    return score;
  };

  const score = userScore();

  return (
    <StyledResultPage>
      <StyledResultTitle>Your Score</StyledResultTitle>
      <StyledResult>
        <strong>{score}</strong> out of <strong>{state.length * 10}</strong>
      </StyledResult>
      <Analysis qna={state} />
    </StyledResultPage>
  );
};

export default ResultPage;
