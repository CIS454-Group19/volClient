import React, { Component } from 'react';
import '../css/App.css';
import UserBox from './UserBox';
import UserDesc from './UserDesc';
import DoctorTable from './DoctorTable';
import HistoryTable from './HistoryTable';

class Patient extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6">                
            <UserBox />
            <UserDesc />
          </div>
          <div className="col-lg-6">
            <DoctorTable />
            <HistoryTable />
          </div>
        </div>
      </div>          
    );
  }
}

export default Patient;