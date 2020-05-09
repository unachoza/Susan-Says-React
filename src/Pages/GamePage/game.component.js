import React, { Component } from 'react';
import Button from 'Components/Buttons/Button.component';
import 'Components/Buttons/button.styles.css';

class GamePage extends Component {
  render() {
    return (
      <div className="page" id="page2">
        <div className="susan-container">
          <Button className="susan-container color top" id="blue">
            Blue
          </Button>
          <Button className="susan-container color top" id="green">
            Green
          </Button>
          <br></br>
          <Button className="susan-container color " id="go">
            Go
          </Button>
          <Button className="susan-container color side" id="purple">
            Purple
          </Button>
          <Button className="susan-container color side" id="red">
            Red
          </Button>
        </div>
      </div>
    );
  }
}

export default GamePage;
