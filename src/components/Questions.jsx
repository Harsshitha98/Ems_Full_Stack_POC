import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import { useState } from "react";
import QUESTIONS from "../questions.js";

export default function Questions({ index, onSelectAnswer, onSkipAns }) {
  const [answer, setAnswer] = useState({
    selectedAnswers: '',
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswers) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectedAnswer(answer) {
    setAnswer({
      selectedAnswers: answer,
      isCorrect: null,
    });
    setTimeout(() => {
      setAnswer({
        selectedAnswers: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = '';

  if (answerState.selectedAnswers && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectedAnswers) {
    answerState = 'answered';
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswers === "" ? onSkipAns : null}
        mode={answerState}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswers={answer.selectedAnswers}
        answerState={answerState}
        onSelect={handleSelectedAnswer}
      />
    </div>
  );
}
