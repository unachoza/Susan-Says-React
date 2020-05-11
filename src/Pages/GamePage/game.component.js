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
    this.clickColorButtons();
    this.susanBlink();
  };
  addRandomColorToSequence = () => {
    let element = Math.floor(Math.random() * 4);
    this.setState((prevState) => ({ susansColors: prevState.susansColors, ...element }));
    console.log(this.state);
  };

  clickColorButtons = (e) => {
    {
      /*pseudocode:
    onclick color needs to be added to userColors array
    and trigger active animation
    keep track of sequence lengths to trigger win logic when lengths are equal
     */
    }
    console.log(e.target.value);
    let value = e.target.value
    this.setState(prevState => ({ usersColors: [...prevState.usersColors, value] }));
    console.log(this.state);
    // this.state.usersColors.push(buttons[i]['value']);
    // this.winOrLoseAfter(this.state.susansColors, this.state.usersColors);
  };

  // pseudocode:
  //    takes susansColors sequence and translates to which colors need to blink, loops through entire arr
  susanBlink = (sequence) => {
    for (let i = 0; i < sequence.length; i++) {
      setTimeout(() => {
        this.whichColorBlinks(sequence[i]);
      }, i * 500);
    }
  };

  // pseudocode:
  // translates sequences arr values to which colors blink
  whichColorBlinks = (sequence) => {
    switch (sequence) {
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
      default: return;
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
    let loser = false;
    if (user.length === susan.length) {
      for (let i = 0; i < this.state.susansColors.length; i++) {
        if (susan[i] !== user[i]) {
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
