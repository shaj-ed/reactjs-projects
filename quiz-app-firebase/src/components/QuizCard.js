import {
  StyledQuizCard,
  StyledQuizInfo,
  StyledQuizPara,
  StyledQuizThumb,
  StyledQuizTitle,
  StyledParaContainer,
} from "../styles/QuizCard.styled";

const QuizCard = ({ topic }) => {
  const { id, title, noq } = topic;
  return (
    <StyledQuizCard to={`/quiz/${id}`}>
      <StyledQuizThumb></StyledQuizThumb>
      <StyledQuizInfo>
        <StyledQuizTitle>{title}</StyledQuizTitle>
        <StyledParaContainer>
          <StyledQuizPara>{noq} Questions</StyledQuizPara>
          <StyledQuizPara>Not taken yet.</StyledQuizPara>
        </StyledParaContainer>
      </StyledQuizInfo>
    </StyledQuizCard>
  );
};

export default QuizCard;
