import React, { Component } from 'react';
import '../css/App.css';
import person from '../person.jpg';
import person2 from '../person2.png';
import { Table } from 'react-bootstrap';
import DoctCell from './DoctCell';

class PatientRequests extends Component {
  render() {
    return (
      <div className="vol-feed">
        <Table responsive>
          <thead>
            <tr>
              <th> Doctors </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <DoctCell />
              </td>
            </tr>
            <tr>
              <td>
                <DoctCell />
              </td>
            </tr>
            <tr>
              <td>
                <DoctCell />
              </td>
            </tr>
          </tbody>
	      </Table>
      </div>
    );
  }
}

export default PatientRequests;