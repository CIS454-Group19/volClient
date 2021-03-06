import React, { Component } from 'react';
import '../css/App.css';
import UserBox from './UserBox';
import UserDesc from './UserDesc';
import DoctorTable from './DoctorTable';
import HistoryTable from './HistoryTable';
import FutureTable from './FutureTable';

class Patient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
      loggedIn: false,
    } 
  }


  componentWillMount() {
    localStorage.getItem('User') && this.setState({
      user: JSON.parse(localStorage.getItem('User'))
    })
  }

  componentDidMount() {
    console.log('Loaded User', this.state.user)
    {this.state.user.length === 0 ?
      window.location = '/login'
    : null   
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {this.state.user.length > 0 ?                
              <UserBox 
                firstName={this.state.user[0].user_first} 
                lastName={this.state.user[0].user_last}
                userName={this.state.user[0].user_uid}
                rating={this.state.user[0].rating}
                visits={this.state.user[0].number_visits}
              />
            : null}
            {this.state.user.length > 0 ?
              <UserDesc
                location={this.state.user[0].user_location}
                bio={this.state.user[0].user_bio}
              />
            : null}
            <FutureTable />
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