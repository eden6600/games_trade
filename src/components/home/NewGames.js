import React, { Component } from 'react';
import GameCard from './GameCard';
import classnames from 'classnames';

class NewGames extends Component {
  render() {
    const { platform, heading, games } = this.props;

    return (
      <div className="mb-3">
        <h4>
          <i
            className={classnames({
              'fab fa-playstation': platform === 'playstation',
              'fab fa-xbox': platform === 'xbox'
            })}
          />{' '}
          New {heading} Games
        </h4>
        <div className="row">
          {games.map(game => {
            return (
              <div className="col-lg-4 col-md-6" key={game.id}>
                <GameCard game={game} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NewGames;
