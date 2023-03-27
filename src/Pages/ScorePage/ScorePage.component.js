import React from 'react';
import Trivia from 'Components/Trivia/Trivia.component';
import 'Components/Buttons/button.styles.css';
import 'Pages/ScorePage/ScorePage.styles.css';

const ScorePage = ({ ladiesIndex }) => {
  return (
    <div className="page">
      <Trivia ladiesIndex={ladiesIndex}/>
      {/* <a href="https://www.linkedin.com/in/arianna-choza-37a44762/" target="blank">
        created by arianna choza
      </a> */}
    </div>
  );
};

export default ScorePage;
