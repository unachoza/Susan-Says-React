import React, { useState, useEffect } from 'react';
import Button from 'Components/Buttons/Button.component';
import 'Components/Buttons/button.styles.css';
import 'Pages/GamePage/game.styles.css';

const GamePage = ({ showScore, setCurrentButton, isDisabled, setIsDisabled, gameVisible, setGameVisible }) => {
  const [susansColors, setSusansColors] = useState([]);
  const [usersColors, setUserColors] = useState([]);
  const [activeColor, setActiveColor] = useState(null);

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

  const susanBlinks = (susansColors) => {
    console.log(susansColors);
    susansColors.forEach((color, i) =>
      setTimeout(() => {
        whichColorBlinks(color);
      }, i * 500)
    );
  };
  const whichBlinks = {
    0: 'red',
    1: 'blue',
    2: 'green',
    3: 'purple',
  };

  const whichColorBlinks = (color) => {
    setActiveColor(whichBlinks[color]);
    setTimeout(() => {
      setActiveColor(null);
    }, 400);
  };

  const winOrLoseAfter = (susan, user) => {
    if (user.length === 0 && susan.length === 0) return;
    let loser = false;
    if (user.length === susan.length) {
      setIsDisabled(true);
      for (let i = 0; i < susan.length; i++) {
        if (susan[i] !== user[i]) {
          loser = true;
          showScore();
          setCurrentButton('restart');
        }
      }
      if (!loser) {
        setGameVisible(false);
        setCurrentButton('nextLevel');
        setUserColors([]);
      }
    }
  };
  return (
    <div style={!gameVisible ? { visibility: 'hidden' } : null} className="susan-container">
      <Button
        className="color side"
        id="purple"
        value={3}
        style={activeColor === 'purple' ? { background: 'rgb(236, 24, 236)' } : null}
        onClick={(e) => handleUserClickColorButtons(e)}
        disabled={isDisabled}
      >
        Purple
      </Button>
      <Button
        className="color top"
        id="blue"
        style={activeColor === 'blue' ? { background: 'rgb(33, 187, 238)' } : null}
        value={1}
        onClick={(e) => handleUserClickColorButtons(e)}
        disabled={isDisabled}
      >
        Blue
      </Button>
      <Button
        className="color side"
        id="red"
        style={activeColor === 'red' ? { background: 'rgb(247, 50, 188)' } : null}
        value={0}
        onClick={(e) => handleUserClickColorButtons(e)}
        disabled={isDisabled}
      >
        Red
      </Button>
      {/* <br></br> */}
      <Button className="color " id="go" value="go" onClick={() => handleGo()} disabled={isDisabled}>
        Go
      </Button>
      <br></br>
      <Button
        className="color top"
        id="green"
        style={activeColor === 'green' ? { background: 'rgb(132, 216, 7)' } : null}
        value={2}
        onClick={(e) => handleUserClickColorButtons(e)}
        disabled={isDisabled}
      >
        Green
      </Button>
    </div>
  );
};

export default GamePage;
