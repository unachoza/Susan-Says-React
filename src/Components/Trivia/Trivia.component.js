import React from 'react';
import ladies from 'Constants/constants.js';
import 'Components/Trivia/Trivia.styles.css';

const Trivia = ({ ladiesIndex }) => (
  <div>
    <div className="facts-container">This lady is {ladies[ladiesIndex].name}</div>
  </div>
);
export default Trivia;