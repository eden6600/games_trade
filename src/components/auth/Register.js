import React, { Component } from 'react';
import PlacesAutoComplete from '../places_api/PlacesAutoComplete';

class Register extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-8 mx-auto text-center">
          <h1 className="display-4 mb-3">Register</h1>

          <div className="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i className="fas fa-at text-primary" />
              </span>
            </div>
            <input
              type="email"
              className="form-control"
              name="name"
              // value={this.state.name}
              // onChange={this.onChange}
              placeholder="Email"
            />
          </div>

          <div className="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i className="fas fa-key text-primary" />
              </span>
            </div>

            <input
              type="password"
              className="form-control"
              name="name"
              // value={this.state.name}
              // onChange={this.onChange}
              placeholder="Password"
            />
          </div>

          <div className="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i className="fas fa-user-circle text-primary" />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="name"
              // value={this.state.name}
              // onChange={this.onChange}
              placeholder="Name"
            />
          </div>

          <div className="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i className="fas fa-map-marker-alt text-primary" />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="name"
              // value={this.state.name}
              // onChange={this.onChange}
              placeholder="Location"
            />
          </div>

          <button className="btn btn-primary btn-block">Register</button>
        </div>
      </div>
    );
  }
}

export default Register;
