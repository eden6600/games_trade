import React, { Component } from 'react';
import { Consumer } from '../../../context';
import { Link } from 'react-router-dom';

class Wishlist extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { wishlist } = value;

          return (
            <div>
              {wishlist.length > 0 ? (
                <ul className="list-group mb-2">
                  {wishlist.map(game => {
                    return (
                      <li className="list-group-item">
                        <img
                          src={game.cover.url}
                          className="rounded-circle mr-2"
                          style={style.cover}
                        />
                        {game.name}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <div className="alert alert-primary text-center">
                  No Games In Your Wishlist
                </div>
              )}

              <Link
                to="/profile/add_new_wishlist_game"
                className="btn btn-primary float-right mb-2"
              >
                <i className="fas fa-plus" /> Add New Game
              </Link>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

const style = {
  cover: {
    height: '50px',
    width: '50px'
  }
};

export default Wishlist;
