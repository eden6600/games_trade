import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import MyGames from './MyGames';
import TradeReq from './TradeReq';
import Wishlist from './Wishlist';

class Profile extends Component {
  state = {
    view: '',
    active: null,
    lastActive: null
  };

  onClick = e => {
    this.setState(
      { lastActive: this.state.active, active: e.target, view: e.target.name },
      () => {
        const { active, lastActive } = this.state;

        active.classList.add('active');
        if (lastActive && active !== lastActive)
          lastActive.classList.remove('active');
      }
    );
  };

  render() {
    let view;

    switch (this.state.view) {
      case 'personalInfo':
        view = <PersonalInfo />;
        break;
      case 'myGames':
        view = <MyGames />;
        break;
      case 'tradeRequests':
        view = <TradeReq />;
        break;
      case 'wishlist':
        view = <Wishlist />;
        break;
    }

    return (
      <div className="row">
        <div className="col-md-3">
          <ul className="list-group">
            <button
              className="list-group-item list-group-item-action border-0"
              name="personalInfo"
              onClick={this.onClick}
              style={{ cursor: 'pointer' }}
            >
              <i className="fas fa-user-circle" /> Personl Info
            </button>
            <button
              className="list-group-item list-group-item-action border-0"
              name="myGames"
              onClick={this.onClick}
              style={{ cursor: 'pointer' }}
            >
              <i className="fas fa-list-ul" /> My Games
            </button>
            <button
              className="list-group-item list-group-item-action border-0"
              name="tradeRequests"
              onClick={this.onClick}
              style={{ cursor: 'pointer' }}
            >
              <i className="fas fa-exchange-alt" /> Trade Requests
            </button>
            <button
              className="list-group-item list-group-item-action border-0"
              name="wishlist"
              onClick={this.onClick}
              style={{ cursor: 'pointer' }}
            >
              <i className="far fa-star" /> Wishlist
            </button>
          </ul>
        </div>

        <div className="col-md-9">{view}</div>
      </div>
    );
  }
}

export default Profile;
