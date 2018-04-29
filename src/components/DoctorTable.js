import React, { Component } from 'react';
import '../css/App.css';
import person from '../person.jpg';
import person2 from '../person2.png';
import { Table } from 'react-bootstrap';
import DoctCell from './DoctCell';

class PatientRequests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doctors: [],
    }
    
    this.getDocs = this.getDocs.bind(this);
  }

  componentDidMount() {
    this.getDocs();
  }

  getDocs() {
    return fetch(`http://localhost:8080/api/v1/doctors.php`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(function(response) {
      return response.json();
    }).then(data => {
      this.setState({doctors: data});
      console.log('Doctors', this.state.doctors);
    });
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('Doctors', JSON.stringify(nextState.doctors))
  }

  // updateTable(index, projectId) {
  //   let newArr = this.state.campaigns
  //   newArr[index].newProjectId = projectId
  //   this.setState({campaigns : newArr})
  // }

  render() {
    return (
      <div className="vol-feed">
        <Table responsive>
          <thead>
            <tr>
              <th> Doctors </th>
            </tr>
          </thead>
          <tbody>
            {this.state.doctors.map((doctor, i) =>
              <tr key={doctor.id}>
                <td>
                  <DoctCell 
                    firstName={doctor.user_first}
                    lastName={doctor.user_last}
                    index={i}
                    doctors={this.state.doctors}
                  />
                </td>
              </tr>
            )}
          </tbody>
	      </Table>
      </div>
    );
  }
}

export default PatientRequests;