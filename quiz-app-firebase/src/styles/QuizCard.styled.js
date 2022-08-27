import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledQuizCard = styled(Link)`
  display: flex;
  width: 100%;
  background-color: var(--card-bg-dark);
  color: var(--light-primary);
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const StyledQuizThumb = styled.div`
  width: 10rem;
  height: 100%;
  background-color: var(--dark-secondary);
  opacity: 0.6;
`;

export const StyledQuizInfo = styled.div`
  flex: 1;
  padding: 1.5rem;
  align-self: center;
`;

export const StyledQuizTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 600;
`;

export const StyledParaContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const StyledQuizPara = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
`;
