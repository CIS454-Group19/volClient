import React, { Component } from 'react';
import '../css/App.css';
import person from '../person.jpg';
import person2 from '../person2.png';
import { Table } from 'react-bootstrap';
import PatCell from './PatCell';

class VolunteerTable extends Component {
  render() {
    return (
      <div className="vol-feed">
        <Table responsive>
          <thead>
            <tr>
              <th> Requested Service </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <PatCell />
              </td>
            </tr>
            <tr>
              <td>
                <PatCell />
              </td>
            </tr>
            <tr>
              <td>
                <PatCell />
              </td>
            </tr>
          </tbody>
	      </Table>
      </div>
    );
  }
}

export default VolunteerTable;