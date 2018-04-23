import React, { Component } from 'react';
import '../css/App.css';

class UserDesc extends Component {



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
      <div className="user-desc">
        <div className="user-location">
           {this.state.users.length > 0 ?
            this.state.users.map(user =>
            <div className='location-pos'>
              <b>Location: </b>{user.user_location}
            </div>) : null}
        </div>
          {this.state.users.length > 0 ?
          this.state.users.map(user =>
          <div className='user-bio'>
            {user.user_bio}
          </div>) : null}
      </div>
    );
  }
}

export default UserDesc;