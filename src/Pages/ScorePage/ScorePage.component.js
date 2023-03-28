import React from 'react';
import Trivia from '../../Components/Trivia/Trivia.component';
import '../../Components/Buttons/button.styles.css';
import './ScorePage.styles.css';

const ScorePage = ({ ladiesIndex }) => {
  return (
    <div className="page">
      <Trivia ladiesIndex={ladiesIndex}/>
    </div>
  );
};

export default ScorePage;
