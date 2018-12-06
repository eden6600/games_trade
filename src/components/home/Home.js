import React, { Component } from 'react';
import { Consumer } from '../../context';
import NewGames from './NewGames';

class Home extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { newPsGames } = value;

          return (
            <div>
              <NewGames
                heading="PS4"
                platform="playstation"
                games={newPsGames}
              />
              {/* <NewGames heading="Xbox One" platform="xbox" /> */}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Home;
