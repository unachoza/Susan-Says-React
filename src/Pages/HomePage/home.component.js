import React from 'react';
import { instructions } from 'Constants.Instructions.constant';
import './home.styles.css';

const Home = () => {
  return (
    <div className="page">
      <div className="text-window">
        {setTimeout(instructions[1], 3000)}
        {setTimeout(instructions[2], 3000)}
        {setTimeout(instructions[3], 3000)}
      </div>
    </div>
  );
};

export default Home;
