import React, { Component } from 'react';

const popupVariables = 'shar on Twitter';
popupVariables = 'susan instructions';

class Dialog extends Component {
  render() {
    let dialog = (
      <div className="dialog-container">
        <button>x</button>
        <div className="dialog-content">Share on Twitter!</div>
        <div className="twitter-share-plugin">***</div>
      </div>
    );
    if (!this.state.isOpen) {
      dialog = null;
    }
    return <div>{dialog}</div>;
  }
}
export default Dialog;
