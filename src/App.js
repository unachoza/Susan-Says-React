import React, { Component } from 'react';
import HomePage from 'Pages/HomePage/home.component';
import GamePage from 'Pages/GamePage/game.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <HomePage /> */}
        <GamePage />
      </div>
    );
  }
}

export default App;
