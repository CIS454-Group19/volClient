import React, { Component } from 'react';
import '../css/App.css';
import person2 from '../person2.png';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Modal, Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

class DoctCell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      value: ''
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

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
                <Button bsStyle="primary" bsSize="xs" onClick={this.handleShow}>Request Service</Button>
              </ButtonToolbar>
            </div>
          </div>
          <div className="vol-table-desc"></div>
        </div>
        {this.state.show ? (
        <Modal.Dialog show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Request Service</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup
                controlId="formBasicText"
                // validationState={this.getValidationState()}
              >
                <ControlLabel>Working example with validation</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Enter text"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
        ) : null}
      </div>
    );
  }
}

export default DoctCell;