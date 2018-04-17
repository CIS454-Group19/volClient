import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import Patient from './Patient';
import Doctor from './Doctor';
import Profile2 from './Profile2';
import {
  Route,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: []
    }
    
    this.getPHP = this.getPHP.bind(this);
  }

  componentDidMount() {
    this.getPHP();
  }

  getPHP() {
    return fetch(`http://localhost:8080/api/v1/employees.php`, {
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
      this.setState({employees: data});
      console.log('Employees', this.state.employees);
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <div className="App-menu">
              <ul>
                <li><Link to='/'>Patient</Link></li>
                <li><Link to='/doc'>Doctor</Link></li>
              </ul>
            </div>
          </header>

          <Route exact path='/' component={Patient} />
          <Route path='/doc' component={Doctor} />
          <Route path='/profile2' component={Profile2} />
        </div>
      </Router>
    );
  }
}

export default App;

// {this.state.employees.length > 0 ? 
//   this.state.employees.map(employee => 
//     <div className='col-lg-6-'>
//       {employee.id}
//     </div>) : null}  