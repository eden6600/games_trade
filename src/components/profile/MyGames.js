import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import classnames from 'classnames';
import GamesListDropdown from '../layout/GamesListDropdown';

class MyGames extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { myGames } = value;

          if (myGames) {
            return (
              <div className="animated fadeIn">
                <table className="table text-center">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Platform</th>
                      <th>Date</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {myGames.map(game => {
                      return (
                        <tr key={game.id}>
                          <td>{game.name}</td>
                          <td>
                            <i
                              className={classnames({
                                'fab fa-playstation': game.platform == 'PS4',
                                'fab fa-xbox': game.platform == 'Xbox'
                              })}
                            />
                          </td>
                          <td>{game.date}</td>
                          <td>
                            <GamesListDropdown game={game} />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <Link
                  to="/profile/add_new_game"
                  className="btn btn-primary float-right mb-2"
                >
                  <i className="fas fa-plus" /> Add New Game
                </Link>
              </div>
            );
          } else {
            return (
              <div>
                <div className="alert alert-primary text-center">
                  No Games Has Been Added
                </div>
                <Link
                  to="/profile/add_new_game"
                  className="btn btn-primary float-right mb-2"
                >
                  <i className="fas fa-plus" /> Add New Game
                </Link>
              </div>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default MyGames;
