import React, { Component } from 'react';
import '../css/App.css';
import { Table } from 'react-bootstrap';

class FutureTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
    } 

    // this.requestUpcomingApps = this.requestUpcomingApps.bind(this);

  }

  componentWillMount() {
    localStorage.getItem('User') && this.setState({
      user: JSON.parse(localStorage.getItem('User'))
    })
  }

  componentDidMount() {
    console.log('Updated User!!!!!', this.state.user);
    this.requestUpcomingApps();

  }

  requestUpcomingApps() {
    let self = this;
    let data = {
      uid: this.state.user[0].user_id,
    }
    return fetch(`http://localhost:8080/api/v1/upcoming.php`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(function(response) {
      return response.json();
    })
    .then(data => {
      console.log('Response', data);
    })
  }


  render() {
    return (
      <div className="future-visits">
        <Table responsive>
          <thead>
            <tr>
              <th> Upcoming Visits </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Hello
              </td>
            </tr>
            <tr>
              <td>
                Hello
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default FutureTable;