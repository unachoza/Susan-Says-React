import React, { Component } from 'react';
import Button from 'Components/Buttons/Button.component';
import 'Components/Buttons/button.styles.css';

class GamePage extends Component {
  constructor() {
    super();
    this.state = {
      susansColors: [],
      usersColors: [],
    };
  }
  handleGo = () => {
    const { susansColors } = this.state;
    console.log('go, we are going!');
    {
      /*pseudocode:
    susansColors needs to increment
    susansColors needs to call color buttons to blink
    wait for user response to equal length of susansColors
    then check win logic
    if win allow next level to appear
    if lose show score page  */
    }

    this.addRandomColorToSequence();
    this.susanBlink(susansColors);
  };
  addRandomColorToSequence = () => {
    let element = Math.floor(Math.random() * 4);
    console.log(element);
    this.setState((prevState) => ({ susansColors: [...prevState.susansColors, element] }));
    console.log(this.state);
  };

  clickColorButtons = (e) => {
    const { usersColors, susansColors } = this.state;
    let value = e.target.value;
    console.log(value);
    this.setState((prevState) => ({ usersColors: [...prevState.usersColors, parseInt(value)] }));
    if (usersColors.length === susansColors.length) this.winOrLoseAfter(susansColors, usersColors);
  };

  // pseudocode:
  //    takes susansColors sequence and translates to which colors need to blink
  susanBlink = (sequence) => {
    sequence.forEach((color, i) =>
      setTimeout(() => {
        this.whichColorBlinks(color);
      }, i * 500)
    );
  };

  // pseudocode:
  // translates sequences arr values to which colors blink
  whichColorBlinks = (color) => {
    switch (color) {
      case 0:
        setTimeout(() => {
          document.getElementById('red').classList.remove('activeR');
        }, 400);
        break;
      case 1:
        setTimeout(() => {
          document.getElementById('blue').classList.remove('activeB');
        }, 400);
        break;
      case 2:
        setTimeout(() => {
          document.getElementById('green').classList.remove('activeG');
        }, 400);
        break;
      case 3:
        setTimeout(() => {
          document.getElementById('purple').classList.remove('activeP');
        }, 400);
        break;
      default:
        return;
    }
  };

  winOrLoseAfter = (susan, user) => {
    {
      /*pseudocode:
   compares arrays, susan v user,
   if equal, show next level button
   else calculate score 
     */
    }
    console.log('checking for winners');
    console.log(this.state);
    let loser = false;
    if (user.length === susan.length) {
      for (let i = 0; i < susan.length; i++) {
        if (susan[i] !== user[i]) {
          console.log('you lost');
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
        console.log('you won!!!!');
        // score += this.state.susansColors.length * 10;
        // gamePage.style.visibility = 'hidden';
        // nextLevel.style.visibility = 'visible';
      }
    }
  };

  render() {
    const { usersColors, susansColors } = this.state;
    if (usersColors.length === susansColors.length) this.winOrLoseAfter(susansColors, usersColors);

    return (
      <div className="page" id="page2">
        <div className="susan-container">
          <Button className="color top" id="blue" value={1} onClick={(e) => this.clickColorButtons(e)}>
            Blue
          </Button>
          <Button className="color top" id="green" value={2} onClick={(e) => this.clickColorButtons(e)}>
            Green
          </Button>
          <br></br>
          <Button className="color " id="go" value="go" onClick={() => this.handleGo()}>
            Go
          </Button>
          <Button className="color side" id="purple" value={3} onClick={(e) => this.clickColorButtons(e)}>
            Purple
          </Button>
          <Button className="color side" id="red" value={0} onClick={(e) => this.clickColorButtons(e)}>
            Red
          </Button>
        </div>
      </div>
    );
  }
}

export default GamePage;
