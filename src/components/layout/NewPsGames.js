import React, { Component } from 'react';
import GameCard from './GameCard';

export default class NewPsGames extends Component {
  render() {
    return (
      <div className="mb-3">
        <h4>
          <i class="fab fa-playstation" /> New PS4 Games
        </h4>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <GameCard />
          </div>
          <div className="col-lg-4 col-md-6">
            <GameCard />
          </div>
          <div className="col-lg-4 col-md-6">
            <GameCard />
          </div>
        </div>
      </div>
    );
  }
}
