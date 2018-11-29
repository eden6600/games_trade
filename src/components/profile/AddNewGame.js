import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LiveResults from '../layout/LiveResults';

class AddNewGame extends Component {
  state = {
    name: '',
    idsResults: [],
    gamesResults: []
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/api-endpoint.igdb.com/games/?search=${
            this.state.name
          }`,
          {
            headers: {
              'user-key': '0da314c59b4aff6bc797598fbed82db0',
              Accept: 'application/json'
            }
          }
        )
        .then(res => {
          this.setState({ idsResults: res.data });
        })
        .catch(e => {
          console.log('error', e);
        });
    });
  };

  render() {
    return (
      <div>
        <Link to="/profile" className="btn btn-link mb-2">
          <i className="fas fa-arrow-circle-left" /> Back To Profile
        </Link>

        <div className="card">
          <div className="card-header">Add New Game</div>
          <div className="card-body">
            <form action="">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>

              <input
                type="submit"
                className="btn btn-primary btn-block"
                value="Add"
              />
            </form>
          </div>
        </div>
      </div>

      //  <div className="row">
      //     <div className="col-sm-8 mx-auto">
      //       <h3 className="mb-3">Add New Game</h3>
      //       <form>
      //         <div className="form-group">
      //           <input
      //             type="text"
      //             className="form-control"
      //             name="name"
      //             value={this.state.name}
      //             onChange={this.onChange}
      //             placeholder="Name"
      //           />
      //         </div>
      //         <LiveResults ids={this.state.idsResults} />

      //         <div className="form-group">
      //           <input
      //             type="password"
      //             className="form-control"
      //             id="exampleInputPassword1"
      //             placeholder="Password"
      //           />
      //         </div>
      //         <div className="form-group form-check">
      //           <input
      //             type="checkbox"
      //             className="form-check-input"
      //             id="exampleCheck1"
      //           />
      //           <label className="form-check-label" htmlFor="exampleCheck1">
      //             Check me out
      //           </label>
      //         </div>
      //         <button type="submit" className="btn btn-primary btn-block">
      //           ADD
      //         </button>
      //       </form>
      //     </div>
      //   </div>
    );
  }
}

export default AddNewGame;
