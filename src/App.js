import React, { useState } from 'react';
import GamePage from './Pages/GamePage/game.component';
import ScorePage from './Pages/ScorePage/ScorePage.component';
import Button from './Components/Buttons/Button.component.js';
import Footer from './Components/Footer/Footer.component';

import './Components/Buttons/button.styles.css';
import ladies from './Constants/lady.constants.js';
import './App.css';
let ladiesIndex = 0;

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [activeButton, setActiveButton] = useState('play');
  const [isDisabled, setIsDisabled] = useState(false);
  const [isGameVisible, setIsGameVisible] = useState(true);

  const startGame = () => {
    setActivePage('gamePage');
    setIsGameVisible(true);
    setActiveButton(null);
    setIsDisabled(false);
    return (ladiesIndex = 0);
  };
  const displayScore = () => {
    setActivePage('scorePage');
  };
  const nextLevelBackgroundChange = () => {
    ladiesIndex++;
    setIsDisabled(false);
    setActiveButton(null);
    setActivePage('gamePage');
    setIsGameVisible(true);
  };
  return (
    <div className="app-container" style={{ backgroundImage: `url(${ladies[ladiesIndex].img})` }}>
      <div className="game-container">
        {activePage === 'gamePage' && (
          <GamePage
            currentPage={activePage}
            setCurrentPage={setActivePage}
            gameVisible={isGameVisible}
            setGameVisible={setIsGameVisible}
            setCurrentButton={setActiveButton}
            displayScore={displayScore}
            startGame={startGame}
            isDisabled={isDisabled}
            setIsDisabled={setIsDisabled}
          />
        )}
        {activePage === 'scorePage' && <ScorePage ladiesIndex={ladiesIndex} />}
        <div className="gameButtons">
          {activeButton === 'play' && (
            <Button className="button" onClick={startGame}>
              Play Game
            </Button>
          )}
          {activeButton === 'nextLevel' && (
            <Button className="button" onClick={() => nextLevelBackgroundChange()}>
              Next Level
            </Button>
          )}
          {activeButton === 'restart' && (
            <Button className="button" onClick={() => startGame()}>
              Play Again
            </Button>
          )}
        </div>
      </div>
      <Footer ladiesIndex={ladiesIndex} />
    </div>
  );
};

export default App;
