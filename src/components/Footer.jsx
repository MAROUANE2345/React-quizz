import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="main-div">
          <div className="info-div">
            <h4> Our Info </h4>
            <div className="para-div">
              <p>Tel : 06 82 94 34 44</p>
              <p>Email : Quizz@gmail.com</p>
            </div>
          </div>

          <div className="copy-div">
            <p>TechEdu Learning Center © 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
