import React, { Component } from 'react';
import '../css/App.css';
import person from '../person.jpg';
import {
  Link,
} from 'react-router-dom';

class UserBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }

    this.getPHP = this.getPHP.bind(this);
  }

  componentDidMount() {
    this.getPHP();
  }


  getPHP() {
    return fetch(`http://localhost:8080/volApi/v1/users.php`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(function(response) {
      // The response is a Response instance.
      // You parse the data into a useable format using `.json()`
      return response.json();
    }).then(data => {
      this.setState({users: data});
      console.log('Users', this.state.users);
    });
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
            {this.state.users.length > 0 ?
              this.state.users.map(user =>
              <div className='col-lg-6-'>
                {user.user_first}
              </div>) : null}
            </Link>
          </div>
          <div className="userName">
          {this.state.users.length > 0 ?
            this.state.users.map(user =>
              <div className='col-lg-6-'>
                @{user.user_uid}
              </div>) : null}




          </div>
        </div>
        <div className="user-stats">
          {this.state.users.length > 0 ?
          this.state.users.map(user =>
            <div className='useRating'>
              <b>Rating</b>
              <br />
              {user.rating}
            </div>) : null}
          <div className="userVisits">
            <b>Visits</b>{this.state.users.length > 0 ?
            this.state.users.map(user =>
              <div className='col-lg-6-'>
                {user.number_visits}
              </div>) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default UserBox;