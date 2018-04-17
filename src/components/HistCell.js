import React, { Component } from 'react';
import '../css/App.css';
import person2 from '../person2.png';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Modal, Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

class HistCell extends Component {
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
      <div className="hist-cell">
        <div className="hist-photo">
          <img src={person2}/>
        </div>
        <div className="hist-table-topRow">
          <div className="hist-table-name">
            Jimmy
          </div>
          <div className="hist-table-buttons">
            <ButtonToolbar>
              <Button bsStyle="primary" bsSize="xs" onClick={this.handleShow}>Review</Button>
              <Button bsStyle="primary" bsSize="xs">View</Button>
            </ButtonToolbar>
          </div>
        </div>
        {this.state.show ? (
        <Modal.Dialog show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Submit Review</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup
                controlId="formControlsTextarea"
                // validationState={this.getValidationState()}
              >
                <ControlLabel>Working example with validation</ControlLabel>
                <FormControl
                  componentClass="textarea"
                  // type="text"
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
            <Button bsStyle="primary">Submit</Button>
          </Modal.Footer>
        </Modal.Dialog>
        ) : null}
      </div>
    );
  }
}

export default HistCell;