import React, { useState } from 'react';
import HomePage from 'Pages/HomePage/home.component';
import GamePage from 'Pages/GamePage/game.component';
import ScorePage from 'Pages/ScorePage/ScorePage.component';
import Button from 'Components/Buttons/Button.component.js';
import 'Components/Buttons/button.styles.css';
import ladies from 'Constants/constants'

const App = () => {
  const [curretPage, setCurrentPage] = useState('home');
  const [currentButton, setCurrentButton] = useState('play');

  const startGame = () => {
    setCurrentPage('gamePage');
    setCurrentButton(null)
  };
  const showScore = () => {
    setCurrentPage('scorePage');
  };
  const nextLevelBackgroundChange = () => {
    console.log('next level was clicked');
  }
  return (
    <div className="game-container" style={{background: `${ladies.img[i]}`}}>
      {curretPage === 'home' && <HomePage />}
      {curretPage === 'gamePage' && <GamePage curretPage={curretPage} setCurrentButton={setCurrentButton} showScore={showScore} startGame={startGame} />}
      {curretPage === 'scorePage' && <ScorePage />}
      <div className="theseButtons">
        {currentButton === 'play' && (
          <Button className="button" onClick={() => startGame()}>
            Play Game
          </Button>
        )}
        {currentButton === 'nextLevel' && <Button className="button" onClick={() => setCurrentButton(null)}>Next Level</Button>}
        {currentButton === 'restart' && (
          <Button className="button" onClick={() => startGame()}>
            Play Again
          </Button>
        )}
      </div>
    </div>
  );
};

export default App;
