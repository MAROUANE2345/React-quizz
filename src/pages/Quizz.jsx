import React from "react";
import "./Quizz.css";
import questions from "../data/Question.js";
import { useState } from "react";
import { useNavigate } from "react-router";

const Quizz = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  // console.log(questions[0])

  const changeAnswer = (option) => {
    setIndex(index + 1);
    if (option == questions[index].answer) {
      setScore(score + 1);
    }
    if (index == questions.length - 1) {
      navigate(`/result/${score}`);
    }
  };
  // const checkAnswer = (event,answer) =>{
  //    if(event.target.value == answer ){
  //        setScore(score + 1)
  //    }
  // }
  return (
    <div className="quizz">
      <div className="title-div">
        <h1 className="wich-quest">You are in question {index + 1}</h1>
      </div>

      <div className=" quizz-cont"></div>

      <div className="option-div">
        <div className="quest">{questions[index].question}</div>
        <div className="op-div">
          {questions[index].options.map((elmnt) => (
            <div>
              <button className="option" onClick={() => changeAnswer(elmnt)}>
                {elmnt}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quizz;
