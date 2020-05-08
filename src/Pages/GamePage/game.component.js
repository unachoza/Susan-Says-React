import React, { Component } from 'react';
import Button from 'Components/Buttons/Button.component';
import 'Components/Buttons/button.styles.css';



class GamePage extends Component {
  render() {
    return (
      <div className="page" id="page2">
        <div className="susan-container">
          <Button>Red</Button>
          <button className="susan-container color top" id="blue">
            Blue
          </button>
          <button className="susan-container color top" id="green">
            Green
          </button>
          <br></br>
          <button className="susan-container color " id="go">
            Go
          </button>
          <button className="susan-container color side" id="purple">
            Purple
          </button>
          <button className="susan-container color side" id="red">
            Red
          </button>
        </div>
      </div>
    );
  }
}

export default GamePage;
