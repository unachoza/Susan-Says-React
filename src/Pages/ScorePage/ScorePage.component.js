import React, { useState } from 'react';
import Trivia from 'Components/Trivia/Trivia.component';
import 'Components/Buttons/button.styles.css';
import 'Pages/ScorePage/ScorePage.styles.css';

const ScorePage = ({ ladiesIndex }) => {
  return (
    <div className="page">
      <h5 id="display-score">Your Score</h5>
      'Susan Says ' + 'Your Score is ' + score;
      <h4>
        <a href="https://www.linkedin.com/in/arianna-choza-37a44762/" target="blank">
          created by arianna choza
        </a>
      </h4>
      <Trivia ladiesIndex={ladiesIndex}/>
    </div>
  );
};

export default ScorePage;
