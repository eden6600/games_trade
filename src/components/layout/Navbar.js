import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';

class Navbar extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { auth } = value;

          return (
            <nav className="navbar navbar-expand-md navbar-dark bg-primary ">
              <div className="container">
                <Link to="/" className="navbar-brand">
                  Games Trade
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbar-main"
                >
                  <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbar-main">
                  <ul className="navbar-nav ml-auto">
                    {auth === true ? (
                      <React.Fragment>
                        {' '}
                        <li className="nav-item">
                          <Link to="/profile" className="nav-link">
                            <i className="fas fa-user-circle" /> Profile
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/" className="nav-link">
                            <i className="fas fa-sign-out-alt" /> Logout
                          </Link>
                        </li>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <li className="nav-item">
                          <Link to="/" className="nav-link">
                            <i className="fas fa-sign-in-alt" /> Login
                          </Link>
                        </li>
                      </React.Fragment>
                    )}
                  </ul>
                </div>
              </div>
            </nav>
          );
        }}
      </Consumer>
    );
  }
}

export default Navbar;
