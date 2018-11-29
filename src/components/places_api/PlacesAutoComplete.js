import React, { Component } from 'react';
import { GoogleComponent } from 'react-google-location';

const API_KEY = 'AIzaSyC3lmxYDx5RE7FwAdEpOWES4or-ncjfE9I';

class PlacesAutoComplete extends Component {
  state = {
    place: null
  };
  render() {
    return (
      <div>
        <GoogleComponent
          apiKey={API_KEY}
          language={'en'}
          country={'country:il'}
          coordinates={true}
          locationBoxStyle={'form-control'}
          locationListStyle={''}
          onChange={e => {
            this.setState({ place: e });
          }}
        />
      </div>
    );
  }
}

export default PlacesAutoComplete;
