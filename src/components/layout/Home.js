import React, { Component } from 'react';
import NewPsGames from './NewPsGames';
import NewXboxGames from './NewXboxGames';

class Home extends Component {
  render() {
    return (
      <div>
        <NewPsGames />
        <NewXboxGames />
      </div>
    );
  }
}

export default Home;
