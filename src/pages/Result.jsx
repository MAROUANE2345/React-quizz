import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Result.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";

const Result = () => {
  const AgainSection = useRef(null);

  const navigate = useNavigate();

  const { score } = useParams();

  const GoToAgain = (AgainSection) => {
    AgainSection.current.scrollIntoView({ behavior: "smooth" });
  };
  const GoToQuizz = () => {
    navigate("/quizz");
  };
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (score <= 5) {
      setMessage("You’re still at the starting line");
    } else if (score > 5 && score <= 7) {
      setMessage("You’re no longer a beginner");
    } else if (score > 7 && score <= 10) {
      setMessage("You’re a solid React developer");
    }
  });
  return (
    <>
      <div className="result-page">
        <div className="image1"></div>

        <div className="score-div">
          <h2>{message}</h2>
          <h1 className="score">Your Score is {score}</h1>
          <button className="Agree" onClick={() => GoToAgain(AgainSection)}>
            Agree
          </button>
        </div>

        <div className="image2"></div>
      </div>

      <section ref={AgainSection} className="playAgain">
        <div className="again-photo"></div>
        <br />
        <div className="doYouWant">Do you want to play Again ?</div>
        <br />
        <div className="goAgain">
          <button onClick={() => GoToQuizz()}>Go Again</button>
        </div>
      </section>
    </>
  );
};

export default Result;
