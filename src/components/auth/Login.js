import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-8 mx-auto text-center">
          <h1 className="display-4 mb-3">Login</h1>

          <div className="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i className="fas fa-at text-primary" />
              </span>
            </div>
            <input
              type="text"
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

          <button className="btn btn-primary btn-block">Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
