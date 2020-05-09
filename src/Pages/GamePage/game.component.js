import React, { Component } from 'react';
import Button from 'Components/Buttons/Button.component';
import 'Components/Buttons/button.styles.css';

const buttons = [
  {
    dom: blue,
    value: 1,
  },
  {
    dom: green,
    value: 2,
  },
  {
    dom: purple,
    value: 3,
  },
  {
    dom: red,
    value: 0,
  },
  {
    dom: go,
    value: 'go',
  },
];


class GamePage extends Component {
  state = {
    susansColors: [],
    usersColors: [],
  };

  clickColorButtons = () => {
    for (let i = 0; i < buttons.length - 1; i++) {
      buttons[i]['dom'].addEventListener('click', () => {
        user.push(buttons[i]['value']);
        winOrLoseAfter(colorNum, user);
      });
    }
  };
  susanBlink = (colorNum) => {
    for (let i = 0; i < colorNum.length; i++) {
      setTimeout(() => {
        whichColorBlinks(colorNum[i]);
      }, i * 500);
    }
  };
 
  whichColorBlinks = (colorNum) => {
    switch (colorNum) {
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
    winOrLoseAfter = (colorNum, user) => {
    let loser = false;
    if (user.length === colorNum.length) {
      for (let i = 0; i < colorNum.length; i++) {
        if (colorNum[i] !== user[i]) {
          loser = true;
          gamePage.style.visibility = 'hidden';
          page3.style.visibility = 'visible';
          theseButtons.style.margintop = '28vh';
          userScore.innerHTML = 'Susan Says ' + 'Your Score is ' + score;
          scorePage.style.visibility = 'visible';
          restart.style.visibility = 'visible';
          break;
        }
      }
      if (!loser) {
        score += colorNum.length * 10;
        gamePage.style.visibility = 'hidden';
        nextLevel.style.visibility = 'visible';
      }
    }
  }

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
