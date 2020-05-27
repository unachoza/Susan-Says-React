import React, { useState } from 'react';
import HomePage from 'Pages/HomePage/home.component';
import GamePage from 'Pages/GamePage/game.component';
import ScorePage from 'Pages/ScorePage/ScorePage.component';
import Button from 'Components/Buttons/Button.component.js';
import Footer from 'Components/Footer/Footer.component.js'
import 'Components/Buttons/button.styles.css';
import ladies from 'Constants/constants.js';
import 'App.css'
let ladiesIndex = 0;


const App = () => {
  const [curretPage, setCurrentPage] = useState('home');
  const [currentButton, setCurrentButton] = useState('play');
  // const [ladiesIndex, setLadiesIndex] = useState(0)

  const startGame = () => {
    setCurrentPage('gamePage');
    setCurrentButton(null);
  };
  const showScore = () => {
    setCurrentPage('scorePage');
  };
  const nextLevelBackgroundChange = () => {
    console.log('next level was clicked', ladiesIndex);
    ladiesIndex++;
    setCurrentButton(null);
  };
  return (
    <div className="app-container" style={{ backgroundImage: `url(${ladies[ladiesIndex].img})` }}>
      <div className="game-container">
        {curretPage === 'home' && <HomePage />}
        {curretPage === 'gamePage' && (
          <GamePage
            curretPage={curretPage}
            setCurrentButton={setCurrentButton}
            showScore={showScore}
            startGame={startGame}
          />
        )}
        {curretPage === 'scorePage' && <ScorePage />}
        <div className="theseButtons">
          {currentButton === 'play' && (
            <Button className="button" onClick={() => startGame()}>
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
      <Footer ladiesIndex={ladiesIndex} />
      
    </div>
  );
};

export default App;
