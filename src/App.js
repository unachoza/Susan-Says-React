import React, { useState } from 'react';
import HomePage from 'Pages/HomePage/home.component';
import GamePage from 'Pages/GamePage/game.component';
import ScorePage from 'Pages/ScorePage/ScorePage.component';
import Button from 'Components/Buttons/Button.component.js';
import 'Components/Buttons/button.styles.css';


const App = () => {
  const [curretPage, setCurrentPage] = useState('home');

  const startGame = () => {
    setCurrentPage('gamePage');
  };
  const showScore = () => {
   setCurrentPage('scorePage');
  }

  return (
    <div className="game-container">
      {curretPage === 'home' && <HomePage />}
      {curretPage === 'gamePage' && <GamePage curretPage={curretPage} showScore={showScore}/>}
      {curretPage === 'scorePage' && <ScorePage />}
      <div className="theseButtons">
        <Button className="button" id="playbutton" onClick={() => startGame()}>
          Play Game
        </Button>
        <Button className="button" id="nextLevel">
          Next Level
        </Button>
        <Button className="button" id="restart" onClick={() => startGame()}>
          Play Again
        </Button>
      </div>
    </div>
  );
};

export default App;
