import React, { Component } from 'react';
import '../css/App.css';
import person from '../person.jpg';
import {
  Link,
} from 'react-router-dom';

class UserBox extends Component {
  render() {
    return (
      <div className="user-box">
        <div className="user-photo">
          <img src={person}/>
        </div>
        <div className="user-names">
          <div className="full-name">
            <Link to='/profile2'>
              <b>Jesus Vargas</b>
            </Link>
          </div>
          <div className="userName">
            @jesusv
          </div>
        </div>
        <div className="user-stats">
          <div className="useRating">
            4/5<br/><b>Rating</b>
          </div>
          <div className="userVisits">
            10<br/><b>Visits</b>
          </div>
        </div>
      </div>
    );
  }
}

export default UserBox;