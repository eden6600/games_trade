import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_GAME':
      return {
        ...state,
        myGames: state.myGames.filter(game => game.id !== action.payload)
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    auth: true,
    user: {},
    personalInfo: {},
    myGames: [
      {
        id: 1,
        name: 'God of War',
        platform: 'PS4',
        date: '23-11-2018',
        tradeFor: ['Red Dead Redemption 2', 'Darksiders 3']
      },
      {
        id: 2,
        name: 'Spiderman',
        platform: 'PS4',
        date: '09-10-2018',
        tradeFor: ['Red Dead Redemption 2', 'Darksiders 3']
      }
    ],
    tradeReq: [
      {
        fromUser: 'Amitai',
        reqGame: 'God of War',
        tradeFor: 'Red Dead Redemption 2'
      }
    ],
    wishlist: [],
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
