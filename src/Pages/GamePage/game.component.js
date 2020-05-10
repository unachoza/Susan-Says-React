import React, { Component } from 'react';
import Button from 'Components/Buttons/Button.component';
import 'Components/Buttons/button.styles.css';

const buttons = [
  {
    dom: 'blue',
    value: 1,
  },
  {
    dom: 'green',
    value: 2,
  },
  {
    dom: 'purple',
    value: 3,
  },
  {
    dom: 'red',
    value: 0,
  },
  {
    dom: 'go',
    value: 'go',
  },
];

class GamePage extends Component {
  constructor() {
    super();
    this.state = {
      susansColors: [],
      usersColors: [],
    };
  }
  handleGo = () => {
    console.log('go, we are going!');
    {/*pseudocode:
    susansColors needs to increment
    susansColors needs to call color buttons to blink
    wait for user response to equal length of susansColors
    then check win logic
    if win allow next level to appear
    if lose show score page  */}
    
    this.addRandomColorToSequence()
    this.clickColorButtons();
    this.susanBlink();
  };
  addRandomColorToSequence = () => {
    element = Math.floor(Math.random() * 4);
    susansColors.push(element);
  };

  clickColorButtons = () => {
     {/*pseudocode:
    onclick color needs to be added to userColors array
    and trigger active animation
    keep track of sequence lengths to trigger win logic when lengths are equal
     */}
        this.state.usersColors.push(buttons[i]['value']);
        this.winOrLoseAfter(this.state.susansColors, this.state.usersColors);
    }

susanBlink = (susansColors) => {
       {/*pseudocode:
   takes susansColors sequence and translates to which colors need to blink, loops through entire arr
     */}
    for (let i = 0; i < this.state.susansColors.length; i++) {
      setTimeout(() => {
        this.whichColorBlinks(this.state.susansColors[i]);
      }, i * 500);
    }
  };

whichColorBlinks = (susansColors) => {
       {/*pseudocode:
  translates sequences arr values to which colors blink 
     */}
    switch (this.state.susansColors) {
      case 0:
        setTimeout(function () {
          document.getElementById('red').classList.remove('activeR');
        }, 400);
        break;
      case 1:
        setTimeout(function () {
          document.getElementById('blue').classList.remove('activeB');
        }, 400);
        break;
      case 2:
        setTimeout(function () {
          document.getElementById('green').classList.remove('activeG');
        }, 400);
        break;
      case 3:
        setTimeout(function () {
          document.getElementById('purple').classList.remove('activeP');
        }, 400);
        break;
    }
};

winOrLoseAfter = (susansColors, usersColors) => {
       {/*pseudocode:
   compares arrays, susan v user,
   if equal, show next level button
   else calculate score 
     */}
    let loser = false;
    if (this.state.usersColors.length === this.state.susansColors.length) {
      for (let i = 0; i < this.state.susansColors.length; i++) {
        if (this.state.susansColors[i] !== this.state.usersColors[i]) {
          loser = true;
          // gamePage.style.visibility = 'hidden';
          // page3.style.visibility = 'visible';
          // theseButtons.style.margintop = '28vh';
          // this.state.usersColorsScore.innerHTML = 'Susan Says ' + 'Your Score is ' + score;
          // scorePage.style.visibility = 'visible';
          // restart.style.visibility = 'visible';
          break;
        }
      }
      if (!loser) {
        // score += this.state.susansColors.length * 10;
        // gamePage.style.visibility = 'hidden';
        // nextLevel.style.visibility = 'visible';
      }
    }
  };

  render() {
    return (
      <div className="page" id="page2">
        <div className="susan-container">
          <Button className="color top" id="blue">
            Blue
          </Button>
          <Button className="color top" id="green">
            Green
          </Button>
          <br></br>
          <Button className="color " id="go" onClick={() => this.handleGo()}>
            Go
          </Button>
          <Button className="color side" id="purple">
            Purple
          </Button>
          <Button className="color side" id="red">
            Red
          </Button>
        </div>
      </div>
    );
  }
}

export default GamePage;
