import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
import classnames from 'classnames';
import { Consumer } from '../../../context';

class AddNewGame extends Component {
  state = {
    platform: '48',
    offeredGameInput: '',
    acceptableGamesInput: '',
    offeredGame: null,
    acceptableGames: [],
    results: [],
    loading: false
  };

  onClickAdd = (e, result) => {
    e.preventDefault();

    result.platform = this.state.platform;

    if (this.state.acceptableGamesInput.length > 0) {
      this.setState({
        acceptableGames: [...this.state.acceptableGames, result],
        results: [],
        acceptableGamesInput: ''
      });
    } else {
      this.setState({
        results: [],
        offeredGame: result,
        offeredGameInput: result.name
      });
    }
  };

  onClickSearch = (activeInput, e) => {
    e.preventDefault();

    this.setState({ loading: true }, () => {
      if (this.state[activeInput].length > 0) {
        axios
          .get(
            `https://cors-anywhere.herokuapp.com/api-endpoint.igdb.com/games/?search=${
              this.state[activeInput]
            }&filter[category][eq]=0&filter[platforms][eq]=${
              this.state.platform
            }&limit=5`,
            {
              headers: {
                'user-key': '39f720d8cbcb37dcf37364660ce624ba',
                Accept: 'application/json'
              }
            }
          )
          .then(res => {
            this.setState({ results: [] }, () => {
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
                .then(res =>
                  this.setState({ results: res.data, loading: false })
                )
                .catch(err => console.log(err));
            });
          })
          .catch(e => {
            console.log('error', e);
          });
      } else {
        this.setState({ loading: false });
      }
    });
  };

  onClickDelete = id => {
    this.setState({
      acceptableGames: this.state.acceptableGames.filter(game => game.id !== id)
    });
  };

  onClickReset = e => {
    this.setState({
      offeredGame: null,
      offeredGameInput: '',
      acceptableGames: []
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value, results: [] });
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const newGame = {
      platform: this.state.platform,
      offeredGame: this.state.offeredGame,
      acceptableGames: this.state.acceptableGames,
      date: new Date()
    };

    dispatch({ type: 'ADD_GAME', payload: newGame });

    this.props.history.push('/profile');
  };

  render() {
    const {
      platform,
      offeredGameInput,
      offeredGame,
      acceptableGames,
      acceptableGamesInput,
      results
    } = this.state;

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
                <div className="card-header">Add New Game</div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="platform">Platform</label>
                    <select
                      name="platform"
                      className="custom-select"
                      value={platform}
                      onChange={this.onChange}
                      disabled={offeredGame}
                    >
                      <option value="48">Playstation 4</option>
                      <option value="49">Xbox One</option>
                    </select>
                  </div>

                  <label htmlFor="offeredGameInput">Offered Game</label>
                  <div className="input-group mb-2">
                    <input
                      type="text"
                      className="form-control border-right-0"
                      name="offeredGameInput"
                      value={offeredGameInput}
                      onChange={this.onChange}
                      disabled={offeredGame}
                    />
                    <div className="input-group-prepend">
                      {offeredGame ? (
                        <button
                          className="input-group-text btn btn-primary"
                          style={style.searchIcon}
                          onClick={this.onClickReset}
                        >
                          <i className="fas fa-redo" />
                        </button>
                      ) : (
                        <button
                          className="input-group-text btn btn-primary"
                          style={style.searchIcon}
                          onClick={this.onClickSearch.bind(
                            this,
                            'offeredGameInput'
                          )}
                        >
                          <i className="fas fa-search" />
                        </button>
                      )}
                    </div>
                  </div>

                  {offeredGame ? (
                    <div>
                      <label htmlFor="acceptableGamesInput">
                        Acceptable Games
                      </label>
                      <div className="input-group mb-2">
                        <input
                          type="text"
                          className="form-control"
                          name="acceptableGamesInput"
                          value={acceptableGamesInput}
                          onChange={this.onChange}
                        />
                        <div className="input-group-prepend">
                          <button
                            className="input-group-text btn btn-primary"
                            style={style.searchIcon}
                            onClick={this.onClickSearch.bind(
                              this,
                              'acceptableGamesInput'
                            )}
                          >
                            <i className="fas fa-search" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  <PacmanLoader
                    loading={this.state.loading}
                    color={'#123abc'}
                  />

                  <ul className="list-group mb-2">
                    {results.map(result => (
                      <button
                        className="list-group-item list-group-item-action"
                        key={result.id}
                        style={{ cursor: 'pointer' }}
                        onClick={e => {
                          this.onClickAdd(e, result);
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

                  <ul className="list-group mb-2">
                    {acceptableGames.map(game => (
                      <li className="list-group-item bg-light" key={game.id}>
                        <img
                          src={
                            game.cover !== undefined
                              ? game.cover.url
                              : 'https://cdn2.iconfinder.com/data/icons/web-and-ui-8/20/371-512.png'
                          }
                          className="rounded-circle mr-2"
                          style={style.cover}
                        />
                        {game.name}
                        <i
                          className="fas fa-times text-danger float-right"
                          style={{ cursor: 'pointer' }}
                          onClick={this.onClickDelete.bind(this, game.id)}
                        />
                      </li>
                    ))}
                  </ul>

                  {acceptableGames.length > 0 ? (
                    <input
                      type="submit"
                      className="btn btn-primary btn-block"
                      value="Add"
                      onClick={this.onSubmit.bind(this, dispatch)}
                    />
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

export default AddNewGame;
