import React, { Component } from 'react';
import { Consumer } from '../../context';

class PersonalInfo extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return <div />;
        }}
      </Consumer>
    );
  }
}

export default PersonalInfo;
