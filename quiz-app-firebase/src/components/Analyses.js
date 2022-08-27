import {
  StyledAnalysisContainer,
  StyledAnalysisTitle,
  StyledAnalysisOption,
  StyledAnalysisQuestion,
  StyledAnalysisOptContainer,
  StyledColoredContainer,
  StyledRed,
  StyledGreen,
  StyledText,
} from "../styles/Analysis.styled";

const Analysis = ({ qna }) => {
  return (
    <StyledAnalysisContainer>
      <StyledAnalysisTitle>Analysis</StyledAnalysisTitle>
      <StyledColoredContainer>
        <StyledRed></StyledRed>
        <StyledText>Wrong</StyledText>
      </StyledColoredContainer>
      <StyledColoredContainer>
        <StyledGreen></StyledGreen>
        <StyledText>Right</StyledText>
      </StyledColoredContainer>
      {qna.map((item, index) => {
        return (
          <div key={index}>
            <StyledAnalysisQuestion>{item.title}</StyledAnalysisQuestion>
            <StyledAnalysisOptContainer>
              {item.options.map((option, index) => {
                return (
                  <StyledAnalysisOption key={index} correct={option.correct}>
                    {option.title}
                  </StyledAnalysisOption>
                );
              })}
            </StyledAnalysisOptContainer>
          </div>
        );
      })}
    </StyledAnalysisContainer>
  );
};

export default Analysis;
