import React, { Component } from 'react';

class SearchResults extends Component {
  render() {
    return (
      <div>
        <h2 className="mb-2">Results</h2>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th />
              <th>Name</th>
              <th>Platform</th>
              <th>User</th>
              <th>Location</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td />
              <td>The Witcher 3</td>
              <td>
                <i className="fab fa-playstation" />
              </td>
              <td>Eden Hasan</td>
              <td>Hadera</td>
              <td>
                <button className="btn btn-sm">
                  <i className="fas fa-angle-down" /> Details
                </button>{' '}
              </td>
            </tr>
            <tr>
              <td />
              <td>Red Dead Redemption 2</td>
              <td>
                <i className="fab fa-xbox" />
              </td>
              <td>Jon Doe</td>
              <td>Tel Aviv</td>
              <td>
                <button className="btn btn-sm">
                  <i className="fas fa-angle-down" /> Details
                </button>{' '}
              </td>
            </tr>
            <tr>
              <td />
              <td>God of War</td>
              <td>
                <i className="fab fa-playstation" />
              </td>
              <td>Eden Hasan</td>
              <td>Hadera</td>
              <td>
                <button className="btn btn-sm">
                  <i className="fas fa-angle-down" /> Details
                </button>{' '}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default SearchResults;
