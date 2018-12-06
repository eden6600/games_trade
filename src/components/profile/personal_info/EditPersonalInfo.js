import React, { Component } from 'react';
import { Consumer } from '../../../context';
import { Link } from 'react-router-dom';

class EditPersonalInfo extends Component {
  constructor(props) {
    super(props);

    this.firstNameInput = React.createRef();
    this.lastNameInput = React.createRef();
    this.locationInput = React.createRef();
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { personalInfo, dispatch } = value;

          onsubmit = e => {
            e.preventDefault();

            const updDetails = {
              firstName: this.firstNameInput.current.value,
              lastName: this.lastNameInput.current.value,
              locationName: this.locationInput.current.value,
              uuid: personalInfo.uuid,
              displayName: personalInfo.displayName,
              email: personalInfo.email
            };

            dispatch({ type: 'UPDATE_PERSONAL_INFO', payload: updDetails });

            this.props.history.push('/profile');
          };

          return (
            <div>
              <Link to="/profile" className="btn btn-link mb-2">
                <i className="fas fa-arrow-circle-left" /> Back To Profile
              </Link>
              <div className="card">
                <div className="card-header">Edit Personal Info</div>

                <div className="card-body">
                  <form action={this.onsubmit}>
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name="firstName"
                        id="firstName"
                        ref={this.firstNameInput}
                        defaultValue={personalInfo.firstName}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="firstName">Last Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name="LastName"
                        id="LastName"
                        ref={this.lastNameInput}
                        defaultValue={personalInfo.lastName}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="firstName">Location</label>
                      <input
                        className="form-control"
                        type="text"
                        name="Location"
                        id="Location"
                        ref={this.locationInput}
                        defaultValue={personalInfo.location}
                      />
                    </div>
                    <button className="btn btn-primary btn-block" type="submit">
                      Confirm
                    </button>
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditPersonalInfo;
