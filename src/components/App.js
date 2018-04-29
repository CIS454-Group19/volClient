import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import Patient from './Patient';
import Doctor from './Doctor';
import Login from './Login';
import Profile2 from './Profile2';
import {
  Redirect,
  Route,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     fakeAuth.isAuthenticated === true
//       ? <Component {...props} />
//       : <Redirect to='/login' />
//   )} />
// )

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true
//   },
//   signout(cb) {
//     this.isAuthenticated = false
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
      loggedIn: true
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
      return response.json();
    }).then(data => {
      this.setState({user: data});
      console.log('Users', this.state.user);
    });
  }

  render() {
    let appHeader;
    if(this.state.loggedIn) {
      appHeader = (
        <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="App-menu">
          <ul>
            <li><Link to='/patient'>Patient</Link></li>
            <li><Link to='/doc'>Doctor</Link></li>
          </ul>
        </div>
      </header>
      );
    }


    return (
      <Router>
        <div className="App">
          {appHeader}
          <Route exact path='/' />
          <Route path='/login' component={Login}/>
          {/* <Route path='/patient' component={Patient} /> */}
          <Route path='/doc' component={Doctor} />
          <Route path='/profile2' component={Profile2} />
          <Route path='/patient' component={Patient} />
        </div>
      </Router>
    );
  }
}

export default App; 

// {this.state.users.length > 0 ? 
//   this.state.users.map(user => 
//     <div className='col-lg-6-'>
//       {user.user_first}
//     </div>) : null} 