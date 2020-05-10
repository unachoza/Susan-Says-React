import React, { useState } from 'react';
import HomePage from 'Pages/HomePage/home.component';
import GamePage from 'Pages/GamePage/game.component';
import ScorePage from 'Pages/ScorePage/ScorePage.component';
import Button from 'Components/Buttons/Button.component.js';
import 'Components/Buttons/button.styles.css';
import Footer from 'Components/Footer/Footer.component';
import { womensNames } from 'Constants/constants';

const App = () => {
  const [curretPage, setCurrentPage] = useState('home')
 

  const startGame = () => {
    console.log('start gmae was clicked ')
    
    setCurrentPage('gamePage')
    // restart.style.visibility = 'hidden';
    // instructionsPage.style.visibility = 'hidden';
    // gamePage.style.visibility = 'visible';
    // playButton.style.visibility = 'hidden';
    // nextLevel.style.visibility = 'hidden';
    // header.style.visibility = 'hidden';
    // page3.style.visibility = 'hidden';
    // score = 0;
    // colorNum = [];
    // user = [];
    addRandomColorToSequence();
  };

  const addRandomColorToSequence = () => {
console.log('addrandome color was clicked')  
  // element = Math.floor(Math.random() * 4);
    // colorNum.push(element);
  };
  const nextLevelBackgroundChange = () => {
console.log('next level was clicked')  
  // currentBackgroundImage += 1;
    // document.body.style.background = `url(${bImages[currentBackgroundImage]})`;
    // document.body.style.backgroundSize = 'cover';
    // document.body.style.backgroundRepeat = 'no-reapeat';
  };
  const nextLevelAchieved = () => {
console.log('next level acheived was clicked')  
  // gamePage.style.visibility = 'visible';
    // nextLevel.style.visibility = 'hidden';
    // user = [];
  };
    return (
      <div className="game-container">
        {curretPage === 'home' && <HomePage />}
        {curretPage === 'gamePage' && <GamePage curretPage={curretPage} />}
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
        {/* <Footer womensNames={womensNames} /> */}
      </div>
    );
}

export default App;
