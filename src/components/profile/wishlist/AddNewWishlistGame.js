import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Consumer } from '../../../context';
import classnames from 'classnames';

class AddNewWishlistGame extends Component {
  state = {
    platform: '48',
    input: '',
    results: [],
    game: null,
    loading: false
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value, results: [] });
  };

  onClick = e => {
    const { input, platform } = this.state;

    this.setState({ loading: true }, () => {
      if (input.length > 0) {
        axios
          .get(
            `https://cors-anywhere.herokuapp.com/api-endpoint.igdb.com/games/?search=${
              this.state.input
            }&filter[category][eq]=0&filter[platforms][eq]=${platform}&limit=5`,
            {
              headers: {
                'user-key': '39f720d8cbcb37dcf37364660ce624ba',
                Accept: 'application/json'
              }
            }
          )
          .then(res => {
            const idsString = res.data
              .map(id => {
                return id['id'];
              })
              .join();
            axios
              .get(
                `https://cors-anywhere.herokuapp.com/api-endpoint.igdb.com/games/${idsString}`,
                {
                  headers: {
                    'user-key': '39f720d8cbcb37dcf37364660ce624ba',
                    Accept: 'application/json'
                  }
                }
              )
              .then(res => this.setState({ results: res.data, loading: false }))
              .catch(err => console.log(err));
          })
          .catch(err => console.log(err));
      }
    });
  };

  onClickSelect = (e, result) => {
    this.setState({ game: result, results: [], input: result.name });
  };

  onClickAdd = dispatch => {
    const newGame = {
      ...this.state.game,
      platfrom: this.state.platform
    };

    dispatch({ type: 'ADD_GAME_TO_WISHLIST', payload: newGame });

    this.props.history.push('/profile');
  };

  render() {
    const { input, platform, results, game } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div>
              <Link to="/profile" className="btn btn-link mb-2">
                <i className="fas fa-arrow-circle-left" /> Back To Profile
              </Link>

              <div className="card">
                <div className="card-header">Add Game To Wishlist</div>
                <div className="card-body">
                  <label htmlFor="platform">Platform</label>
                  <div className="input-group mb-2">
                    <select
                      name="platform"
                      className="custom-select"
                      value={platform}
                      onChange={this.onChange}
                    >
                      <option value="48">Playstation 4</option>
                      <option value="49">Xbox One</option>
                    </select>
                  </div>

                  <label htmlFor="input">Name</label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="input"
                      value={input}
                      onChange={this.onChange}
                      className={classnames({
                        'form-control': true,
                        'border-right-0': true,
                        'border border-success': false
                      })}
                    />
                    <div className="input-group-prepend">
                      <button
                        className="input-group-text btn btn-primary"
                        style={style.searchIcon}
                        onClick={this.onClick}
                      >
                        <i className="fas fa-search" />
                      </button>
                    </div>
                  </div>

                  <ul className="list-group mb-2">
                    {results.map(result => (
                      <button
                        className="list-group-item list-group-item-action"
                        key={result.id}
                        style={{ cursor: 'pointer' }}
                        onClick={e => {
                          this.onClickSelect(e, result);
                        }}
                      >
                        <img
                          src={
                            result.cover !== undefined
                              ? result.cover.url
                              : 'https://cdn2.iconfinder.com/data/icons/web-and-ui-8/20/371-512.png'
                          }
                          className="rounded-circle mr-2"
                          style={style.cover}
                        />
                        {result.name}
                      </button>
                    ))}
                  </ul>

                  {game ? (
                    <button
                      className="btn btn-primary btn-block"
                      onClick={this.onClickAdd.bind(this, dispatch)}
                    >
                      Add Game
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

const style = {
  searchIcon: {
    borderRadius: '0 0.25rem 0.25rem 0',
    cursor: 'pointer'
  },
  cover: {
    height: '50px',
    width: '50px'
  }
};

export default AddNewWishlistGame;
