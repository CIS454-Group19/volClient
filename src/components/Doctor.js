import React, { Component } from 'react';
import '../css/App.css';
import UserBox from './UserBox';
import UserDesc from './UserDesc';
import PatientTable from './PatientTable';
import HistoryTable from './HistoryTable';

class Doctor extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6">                
            <UserBox />
            <UserDesc />
          </div>
          <div className="col-lg-6">
            <PatientTable />
            <HistoryTable />
          </div>
        </div>
      </div>          
    );
  }
}

export default Doctor;