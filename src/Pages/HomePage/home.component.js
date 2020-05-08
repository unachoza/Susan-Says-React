import React, { Component } from 'react';
import './home.styles.css';

class Home extends Component {
  render() {
    return (
      <div className="page">
        <h3>Instructions</h3>

        <p>
          <strong>
            In effort to encourage more people to listen to women, I present to you Susan Says, a memory game.
          </strong>
          Press the Black Go Button and listen as Susan flashes a sequence of colors. Repeat the pattern by clicking the
          color buttons.<strong> Remember what Susan told you! </strong>
        </p>
      </div>
    );
  }
}

export default Home;
