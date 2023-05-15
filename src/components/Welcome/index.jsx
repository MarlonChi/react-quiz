import React, { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import Quiz from "../../assets/quiz.svg";

import "./styles.css";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  console.log(quizState);

  return (
    <div id="welcome">
      <h2>Seja bem vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
      <img src={Quiz} alt="Logo Quiz" />
    </div>
  );
};

export default Welcome;
