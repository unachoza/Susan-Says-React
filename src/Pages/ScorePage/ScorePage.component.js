import React, { useState } from 'react';
import Button from 'Components/Buttons/Button.component';
import 'Components/Buttons/button.styles.css';
import 'Pages/ScorePage/ScorePage.styles.css';

const ScorePage = ({ startGame }) => {
  return (
    <div className="page">
      <h5 id="display-score">Your Score</h5>
      <h4>
        <a href="https://www.linkedin.com/in/arianna-choza-37a44762/" target="blank">
          created by arianna choza
        </a>
      </h4>
    </div>
  );
};

export default ScorePage;
