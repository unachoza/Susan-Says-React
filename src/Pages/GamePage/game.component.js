import React, { useState, useEffect } from 'react';
import Button from 'Components/Buttons/Button.component';
import Footer from 'Components/Footer/Footer.component';
import { ladies } from 'Constants/constants';
import 'Components/Buttons/button.styles.css';

const GamePage = ({ gamePage, showScore }) => {
  const [susansColors, setSusansColors] = useState([]);
  const [usersColors, setUserColors] = useState([]);
  const [activeBlue, setActiveBlue] = useState(false);
  const [activeGreen, setActiveGreen] = useState(false);
  const [activeRed, setActiveRed] = useState(false);
  const [activePurple, setActivePurple] = useState(false);

  useEffect(() => {
    susanBlinks(susansColors);
  }, [susansColors]);

  useEffect(() => {
    winOrLoseAfter(susansColors, usersColors);
  }, [usersColors]);

  const handleGo = () => {
    addRandomColorToSequence();
  };
  const addRandomColorToSequence = () => {
    let element = Math.floor(Math.random() * 4);
    setSusansColors([...susansColors, element]);
  };

  const handleUserClickColorButtons = (e) => {
    let value = e.target.value;
    setUserColors([...usersColors, parseInt(value)]);
  };
  // pseudocode:
  //    takes susansColors sequence and translates to which colors need to blink
  const susanBlinks = (susansColors) => {
    console.log(susansColors)
      susansColors.forEach((color, i) =>
        setTimeout(() => {
          whichColorBlinks(color);
        }, i * 500)
      );
  }
   const whichColorBlinks = (color) => {
      switch (color) {
        case 0:
          setActiveRed(true);
          setTimeout(() => {
            setActiveRed(false);
          }, 400);
          break;
        case 1:
          setActiveBlue(true);
          setTimeout(() => {
            setActiveBlue(false);
          }, 400);
          break;
        case 2:
          setActiveGreen(true);
          setTimeout(() => {
            setActiveGreen(false);
          }, 400);
          break;
        case 3:
          setActivePurple(true);
          setTimeout(() => {
            setActivePurple(false);
          }, 400);
          break;
        default:
          return;
      }
    };

  const winOrLoseAfter = ((susan, user) => {
    {
      /*pseudocode:
   compares arrays, susan v user,
   if equal, show next level button
   else calculate score 
     */
    }
    if (user.length === 0 && susan.length === 0)return
    let loser = false;
    if (user.length === susan.length) {
      for (let i = 0; i < susan.length; i++) {
        if (susan[i] !== user[i]) {
          loser = true;
          showScore();
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
        nextLevelAchieved(user);
        nextLevelBackgroundChange();
        // score +=state.susansColors.length * 10;
        // gamePage.style.visibility = 'hidden';
        // nextLevel.style.visibility = 'visible';
      }
    }
  });
  const nextLevelBackgroundChange = () => {
    console.log('next level was clicked');
    // currentBackgroundImage += 1;
    // document.body.style.background = `url(${bImages[currentBackgroundImage]})`;
    // document.body.style.backgroundSize = 'cover';
    // document.body.style.backgroundRepeat = 'no-reapeat';
  };
  const nextLevelAchieved = () => {
    console.log('next level acheived was clicked');
    setUserColors([])
    // gamePage.style.visibility = 'visible';
    // nextLevel.style.visibility = 'hidden';
    // user = [];
  };
  // if (usersColors.length === susansColors.length) winOrLoseAfter(susansColors, usersColors);
  return (
    <div className="page" id="page2">
      <div className="susan-container">
        <Button
          className="color top"
          id="blue"
          style={activeBlue ? { background: 'rgb(33, 187, 238)' } : null}
          value={1}
          onClick={(e) => handleUserClickColorButtons(e)}
        >
          Blue
        </Button>
        <Button
          className="color top"
          id="green"
          style={activeGreen ? { background: 'rgb(132, 216, 7)' } : null}
          value={2}
          onClick={(e) => handleUserClickColorButtons(e)}
        >
          Green
        </Button>
        <br></br>
        <Button className="color " id="go" value="go" onClick={() => handleGo()}>
          Go
        </Button>
        <Button
          className="color side"
          id="purple"
          value={3}
          style={activePurple ? { background: 'rgb(236, 24, 236)' } : null}
          onClick={(e) => handleUserClickColorButtons(e)}
        >
          Purple
        </Button>
        <Button
          className="color side"
          id="red"
          style={activeRed ? { background: 'rgb(247, 50, 188)' } : null}
          value={0}
          onClick={(e) => handleUserClickColorButtons(e)}
        >
          Red
        </Button>
      </div>
      <Footer ladies={ladies} />
    </div>
  );
};

export default GamePage;
