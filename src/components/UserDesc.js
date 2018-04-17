import React, { Component } from 'react';
import '../css/App.css';

class UserDesc extends Component {
  render() {
    return (
      <div className="user-desc">
        <div className="user-location">
          <div className="location-pos">
            <b>Location:</b> Syracuse, NY
          </div>
        </div>
        <div className="user-bio">
        </div>
      </div>
    );
  }
}

export default UserDesc;