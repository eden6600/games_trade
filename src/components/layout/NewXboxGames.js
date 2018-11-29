import React, { Component } from 'react';
import GameCard from './GameCard';

class NewXboxGames extends Component {
  render() {
    return (
      <div className="mb-5">
        <h4>
          <i class="fab fa-xbox" /> New Xbox Games
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

export default NewXboxGames;
