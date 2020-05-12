import React, { Component } from 'react';
import Button from 'Components/Buttons/Button.component';
import Footer from 'Components/Footer/Footer.component';
import { ladies } from 'Constants/constants';
import 'Components/Buttons/button.styles.css';

class GamePage extends Component {
  constructor() {
    super();
    this.state = {
      susansColors: [],
      usersColors: [],
      activeBlue: false,
      activeGreen: false,
      activeRed: false,
      activePurple: false,
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
        this.setState({ activeRed: true });
        setTimeout(() => {
          this.setState({ activeRed: false });
        }, 400);
        break;
      case 1:
        this.setState({ activeBlue: true });
        setTimeout(() => {
          this.setState({ activeBlue: false });
        }, 400);
        break;
      case 2:
        this.setState({ activeGreen: true });
        setTimeout(() => {
          this.setState({ activeGreen: false });
        }, 400);
        break;
      case 3:
        this.setState({ activePurple: true });
        setTimeout(() => {
          this.setState({ activePurple: false });
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
          loser = true;
          this.props.showScore();
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
        this.nextLevelAchieved();
        this.nextLevelBackgroundChange();
        // score += this.state.susansColors.length * 10;
        // gamePage.style.visibility = 'hidden';
        // nextLevel.style.visibility = 'visible';
      }
    }
  };
  nextLevelBackgroundChange = () => {
    console.log('next level was clicked');
    // currentBackgroundImage += 1;
    // document.body.style.background = `url(${bImages[currentBackgroundImage]})`;
    // document.body.style.backgroundSize = 'cover';
    // document.body.style.backgroundRepeat = 'no-reapeat';
  };
  nextLevelAchieved = () => {
    console.log('next level acheived was clicked');
    // gamePage.style.visibility = 'visible';
    // nextLevel.style.visibility = 'hidden';
    // user = [];
  };
  render() {
    const { usersColors, susansColors, activeBlue, activeRed, activePurple, activeGreen } = this.state;
    if (usersColors.length === susansColors.length) this.winOrLoseAfter(susansColors, usersColors);
    console.log('rerender');

    return (
      <div className="page" id="page2">
        <div className="susan-container">
          <Button
            className="color top"
            id="blue"
            style={activeBlue ? { background: 'rgb(33, 187, 238)' } : null}
            value={1}
            onClick={(e) => this.clickColorButtons(e)}
          >
            Blue
          </Button>
          <Button
            className="color top"
            id="green"
            style={activeGreen ? { background: 'rgb(132, 216, 7)' } : null}
            value={2}
            onClick={(e) => this.clickColorButtons(e)}
          >
            Green
          </Button>
          <br></br>
          <Button className="color " id="go" value="go" onClick={() => this.handleGo()}>
            Go
          </Button>
          <Button
            className="color side"
            id="purple"
            value={3}
            style={activePurple ? { background: 'rgb(236, 24, 236)' } : null}
            onClick={(e) => this.clickColorButtons(e)}
          >
            Purple
          </Button>
          <Button
            className="color side"
            id="red"
            style={activeRed ? { background: 'rgb(247, 50, 188)' } : null}
            value={0}
            onClick={(e) => this.clickColorButtons(e)}
          >
            Red
          </Button>
        </div>
        <Footer ladies={ladies} />
      </div>
    );
  }
}

export default GamePage;
