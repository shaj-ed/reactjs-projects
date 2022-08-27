import { getDatabase, ref, set } from "firebase/database";
import { useEffect, useState, useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Checkbox from "../components/Checkbox";
import Progress from "../components/Progress";
import { useAuth } from "../context/AuthContext";
import useQuiz from "../Hooks/useQuiz";
import _ from "lodash";
import {
  StyledQuizPage,
  StyledQuizQuestion,
  StyledQuizOptions,
} from "../styles/QuizPage.styled";

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;

      return questions;
    default:
      return state;
  }
};

const QuizPage = () => {
  const [currrentQuestion, setCurrentQuestion] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialState);

  const { id } = useParams();
  const { user } = useAuth();
  const { loading, questions } = useQuiz(id);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  const nextQuestion = () => {
    if (currrentQuestion >= qna.length - 1) {
      return null;
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
    percentage();
  };

  const prevQuestion = () => {
    if (currrentQuestion <= 0) {
      return null;
    } else {
      setCurrentQuestion((prev) => prev - 1);
    }
    percentage();
  };

  const handleAnswerChange = (e, index) => {
    dispatch({
      type: "answer",
      questionID: currrentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  };

  const percentage = () =>
    qna.length > 0 ? ((currrentQuestion + 1) / qna.length) * 100 : 0;

  const submitAnswers = async () => {
    const { uid } = user;
    const db = getDatabase();
    const resultRef = ref(db, `results/${uid}`);

    await set(resultRef, {
      [id]: qna,
    });

    navigate(`/result/${id}`, {
      state: qna,
    });
  };

  return (
    <StyledQuizPage>
      {loading && <h1>Loading..</h1>}
      {!loading && qna && qna.length > 0 && (
        <>
          <StyledQuizQuestion>{qna[currrentQuestion].title}</StyledQuizQuestion>
          <StyledQuizOptions>
            {qna[currrentQuestion].options.map((option, index) => {
              return (
                <Checkbox
                  key={index}
                  text={option.title}
                  checked={option.checked}
                  onChange={(e) => handleAnswerChange(e, index)}
                />
              );
            })}
          </StyledQuizOptions>
          <Progress
            prevQuestion={prevQuestion}
            nextQuestion={nextQuestion}
            percentage={percentage}
            questions={qna}
            current={currrentQuestion}
            handleSubmit={submitAnswers}
          />
        </>
      )}
    </StyledQuizPage>
  );
};

export default QuizPage;
