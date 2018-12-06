import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PERSONAL_INFO':
      console.log('end');
      return {
        ...state,
        personalInfo: action.payload
      };

    case 'ADD_GAME':
      return {
        ...state,
        myGames: [...state.myGames, action.payload]
      };

    case 'DELETE_GAME':
      return {
        ...state,
        myGames: state.myGames.filter(game => game.id !== action.payload)
      };

    case 'ADD_GAME_TO_WISHLIST':
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload]
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/api-endpoint.igdb.com/games/19560,19565,25076`,
        {
          headers: {
            'user-key': '39f720d8cbcb37dcf37364660ce624ba',
            Accept: 'application/json'
          }
        }
      )
      .then(res => this.setState({ newPsGames: res.data }))
      .catch(err => console.log(err));
  }

  state = {
    auth: true,
    personalInfo: {
      uuid: 1,
      firstName: 'Eden',
      lastName: 'Hasan',
      displayName: 'Eden6600',
      email: 'edenhasan@gmail.com',
      location: 'Hadera'
    },
    myGames: [],
    tradeReq: [
      {
        fromUser: 'Amitai',
        reqGame: 'God of War',
        tradeFor: 'Red Dead Redemption 2'
      }
    ],
    wishlist: [],
    newPsGames: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
