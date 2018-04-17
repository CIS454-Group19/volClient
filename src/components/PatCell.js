import React, { Component } from 'react';
import '../css/App.css';
import person2 from '../person2.png';
import { Button } from 'react-bootstrap';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';

class VolCell extends Component {
  render() {
    return (
      <div className="vol-cell">
        <div className="vol-photo">
          <img src={person2}/>
        </div>
        <div className="vol-section">
          <div className="vol-table-topRow">
            <div className="vol-table-name">
              Doctor Doc
            </div>
            <div className="vol-table-buttons">
              <ButtonToolbar>
                <Button bsStyle="primary" bsSize="xs">Accept</Button>
                <Button bsStyle="primary" bsSize="xs">Decline</Button>
              </ButtonToolbar>
            </div>
          </div>
          <div className="vol-table-desc"></div>
        </div>
      </div>
    );
  }
}

export default VolCell;