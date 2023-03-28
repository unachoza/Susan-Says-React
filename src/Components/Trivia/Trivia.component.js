import React from 'react';
import ladies from '../../Constants/lady.constants.js';
import './Trivia.styles.css';

const Trivia = ({ ladiesIndex }) => (
  <div>
    <h5 className="facts-container">This Woman is {ladies[ladiesIndex].name}</h5>
  </div>
);
export default Trivia;
