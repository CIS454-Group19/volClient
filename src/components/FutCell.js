import React, { Component } from 'react';
import '../css/App.css';
import person2 from '../person2.png';

class FutCell extends Component {

  render() {
    return (
      <div className="hist-cell">
        <div className="hist-photo">
          <img src={person2}/>
        </div>
        <div className="hist-table-topRow">
          <div className="hist-table-name">
            Jimmy
          </div>
        </div>
      </div>
    );
  }
}

export default FutCell;