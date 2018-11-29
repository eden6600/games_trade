import React, { Component } from 'react';

class Search extends Component {
  state = {
    searchInput: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="bg-primary pb-3 mb-3">
        <div className="container">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Search for a game..."
              name="searchInput"
              value={this.state.value}
              onChange={this.onChange}
            />
            <button className="btn" style={style.searchIcon}>
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const style = {
  searchIcon: {
    borderRadius: '0 0.25rem 0.25rem 0',
    cursor: 'auto'
  }
};

export default Search;
