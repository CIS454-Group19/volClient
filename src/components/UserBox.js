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
      {user[].user_first}
    </div>) : null} 
              {/* <b>Jesus Vargas</b> */}
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