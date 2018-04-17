import React, { Component } from 'react';
import '../css/App.css';
// import person2 from '../person2.png';
import { Table } from 'react-bootstrap';
import HistCell from './HistCell';

class HistoryTable extends Component {
  render() {
    return (
      <div className="history-table">
        <Table responsive>
          <thead>
            <tr>
              <th> History </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <HistCell />
              </td>
            </tr>
            <tr>
              <td>
                <HistCell />
              </td>
            </tr>
          </tbody>
	      </Table>
      </div>
    );
  }
}

export default HistoryTable;