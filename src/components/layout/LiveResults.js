import React, { Component } from 'react';
import axios from 'axios';

class LiveResults extends Component {
  state = {
    games: []
  };

  componentWillReceiveProps() {}

  render() {
    return <ul className="list-group" />;
  }
}

export default LiveResults;
