import React, { Component } from 'react';
import 'Pages/ScorePage/ScorePage.styles.css';

class ScorePage extends Component {
  render() {
    return (
      <div className="page" id="page3">
        <h5 id="display-score">
          Your Score
        </h5>
        <h4>
          <a href="https://www.linkedin.com/in/arianna-choza-37a44762/" target="blank">
            created by arianna choza
          </a>
        </h4>
      </div>
    );
  }
}

export default ScorePage;
