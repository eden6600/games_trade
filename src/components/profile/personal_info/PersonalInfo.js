import React, { Component } from 'react';
import { Consumer } from '../../../context';
import { Link } from 'react-router-dom';

class PersonalInfo extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { personalInfo } = value;

          return (
            <div className="animated fadeIn">
              <div className="card">
                <div className="card-header">
                  User Details
                  <Link
                    to="/profile/edit_personal_info"
                    type="button"
                    className="btn btn-sm btn-outline-primary float-right"
                  >
                    <i className="fas fa-edit" /> Edit
                  </Link>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item border-0">
                      <strong>First Name: </strong>
                      {personalInfo.firstName}
                    </li>
                    <li className="list-group-item border-0">
                      <strong>Last Name: </strong>
                      {personalInfo.lastName}
                    </li>
                    <li className="list-group-item border-0">
                      <strong>Email: </strong>
                      {personalInfo.email}
                    </li>
                    <li className="list-group-item border-0">
                      <strong>Location: </strong>
                      {personalInfo.location}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default PersonalInfo;
