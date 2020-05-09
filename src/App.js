import React, { Component } from 'react';
import HomePage from 'Pages/HomePage/home.component';
import GamePage from 'Pages/GamePage/game.component';
import ScorePage from 'Pages/ScorePage/ScorePage.component';
import Button from 'Components/Buttons/Button.component.js';
import 'Components/Buttons/button.styles.css';
import Footer from 'Components/Footer/Footer.component';
import { womensNames } from 'Constants/constants';

class App extends Component {
  state = {
    curretPage: 'home',
  };

  startGame = () => {
    restart.style.visibility = 'hidden';
    instructionsPage.style.visibility = 'hidden';
    gamePage.style.visibility = 'visible';
    playButton.style.visibility = 'hidden';
    nextLevel.style.visibility = 'hidden';
    header.style.visibility = 'hidden';
    page3.style.visibility = 'hidden';
    score = 0;
    colorNum = [];
    user = [];
    addRandomColorToSequence();
  };

  addRandomColorToSequence = () => {
    element = Math.floor(Math.random() * 4);
    colorNum.push(element);
  };
  nextLevelBackgroundChange = () => {
    currentBackgroundImage += 1;
    document.body.style.background = `url(${bImages[currentBackgroundImage]})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-reapeat';
  };
  nextLevelAchieved = () => {
    gamePage.style.visibility = 'visible';
    nextLevel.style.visibility = 'hidden';
    user = [];
  };
  render() {
    return (
      <div className="game-container">
        {/* <HomePage /> */}
        <GamePage />
        <ScorePage />
        <div className="theseButtons">
          <Button className="button" id="playbutton">
            Play Game
          </Button>
          <Button className="button" id="nextLevel">
            Next Level
          </Button>
          <Button className="button" id="restart">
            Play Again
          </Button>
        </div>
        {/* <Footer womensNames={womensNames} /> */}
      </div>
    );
  }
}

export default App;
