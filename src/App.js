import React, { Component } from 'react';
import HomePage from 'Pages/HomePage/home.component';
import GamePage from 'Pages/GamePage/game.component';
import ScorePage from 'Pages/ScorePage/ScorePage.component';
import Button from 'Components/Buttons/Button.component.js';
import 'Components/Buttons/button.styles.css';
import Footer from 'Components/Footer/Footer.component';
import {womensNames} from 'Constants/constants'


class App extends Component {
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
