import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import Summary from "./Summary.jsx";
import Questions from "./Questions.jsx";


export default function Quiz() {

  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizCompleted = activeQuestionIndex === QUESTIONS.length;

  const handleSelectedAnswer = useCallback(
    function handleSelectedAnswer (selectedAns) {
      setUserAnswers((prevUserAnswer) => {
        return [...prevUserAnswer, selectedAns];
      });
    },
    []);

  const handleSkipAns = useCallback(() => handleSelectedAnswer(null),
     [handleSelectedAnswer]);

  if (quizCompleted) {
    return <Summary userAnswers={userAnswers}/>
  }

  return (
    <div id="quiz">
       <Questions
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSkipAns={handleSkipAns}
        onSelectAnswer={handleSelectedAnswer}
        />
      </div>
  );
}
