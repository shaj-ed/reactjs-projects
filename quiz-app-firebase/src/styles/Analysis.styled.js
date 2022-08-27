import styled from "styled-components";
import { StyledQuizQuestion } from "./QuizPage.styled";

export const StyledAnalysisContainer = styled.section`
  margin: 3rem 0;
`;

export const StyledAnalysisTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--light-secondary);
  margin-bottom: 3rem;
`;

export const StyledAnalysisQuestion = styled(StyledQuizQuestion)`
  margin: 3rem 0;
`;

export const StyledAnalysisOptContainer = styled.div``;

export const StyledAnalysisOption = styled.span`
  display: block;
  margin-top: 1.5rem;
  background-color: ${(props) => (props.correct ? "#42855B" : "#F37878")};
  color: var(--light-secondary);
  padding: 1.5rem;
  font-size: 1.6rem;
  font-weight: 600;
`;

export const StyledColoredContainer = styled.div`
  display: inline-flex;
  gap: 1.5rem;
  align-items: center;
  margin-right: 2.5rem;
`;

export const StyledRed = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #f37878;
`;

export const StyledGreen = styled(StyledRed)`
  background-color: #42855b;
`;

export const StyledText = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--light-secondary);
`;
