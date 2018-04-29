import React, { Component } from 'react';
import '../css/App.css';
import person from '../person.jpg';
import {
  Link,
} from 'react-router-dom';

class UserBox extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="user-box">
        <div className="user-photo">
          <img src={person}/>
        </div>
        <div className="user-names">
          <div className="full-name">
            <Link to='/profile2'>
              <div>
                {this.props.firstName} {this.props.lastName}
              </div>
              {/* <b>Jesus Vargas</b> */}
            </Link>
          </div>
          <div className="userName">
            @{this.props.userName}
          </div>
        </div>
        <div className="user-stats">
          <div className="useRating">
          {this.props.rating}/5<br/><b>Rating</b>
          </div>
          <div className="userVisits">
          {this.props.visits}<br/><b>Visits</b>
          </div>
        </div>
      </div>
    );
  }
}

export default UserBox;