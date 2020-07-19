import React, { useState } from 'react';
import HomePage from 'Pages/HomePage/home.component';
import GamePage from 'Pages/GamePage/game.component';
import ScorePage from 'Pages/ScorePage/ScorePage.component';
import Button from 'Components/Buttons/Button.component.js';
import Footer from 'Components/Footer/Footer.component.js';
import 'Components/Buttons/button.styles.css';
import ladies from 'Constants/lady.constants.js';
import 'App.css';
let ladiesIndex = 0;

const App = () => {
  const [curretPage, setCurrentPage] = useState('home');
  const [currentButton, setCurrentButton] = useState('play');
  const [isDisabled, setIsDisabled] = useState(false);
  const [gameVisible, setGameVisible] = useState(true);

  // const [ladiesIndex, setLadiesIndex] = useState(0)

  const startGame = () => {
    setCurrentPage('gamePage');
    setCurrentButton(null);
  };
  const showScore = () => {
    setCurrentPage('scorePage');
  };
  const nextLevelBackgroundChange = () => {
    ladiesIndex++;
    setIsDisabled(false);
    setCurrentButton(null);
    setCurrentPage('gamePage');
    setGameVisible(true);
  };
  return (
    <div className="app-container" style={{ backgroundImage: `url(${ladies[ladiesIndex].img})` }}>
      <div className="game-container">
        //add the next level button thing here
        {curretPage === 'gamePage' && (
          <GamePage
            curretPage={curretPage}
            setCurrentPage={setCurrentPage}
            gameVisible={gameVisible}
            setGameVisible={setGameVisible}
            setCurrentButton={setCurrentButton}
            showScore={showScore}
            startGame={startGame}
            isDisabled={isDisabled}
            setIsDisabled={setIsDisabled}
          />
        )}
        {curretPage === 'scorePage' && <ScorePage ladiesIndex={ladiesIndex} />}
        <div className="theseButtons">
          {currentButton === 'play' && (
            <Button className="button" onClick={startGame}>
              Play Game
            </Button>
          )}
          {currentButton === 'nextLevel' && (
            <Button className="button" onClick={() => nextLevelBackgroundChange()}>
              Next Level
            </Button>
          )}
          {currentButton === 'restart' && (
            <Button className="button" onClick={() => startGame()}>
              Play Again
            </Button>
          )}
        </div>
      </div>
      {/* <Footer ladiesIndex={ladiesIndex} /> */}
    </div>
  );
};

export default App;
