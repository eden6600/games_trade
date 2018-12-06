import React from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import Modal from 'react-bootstrap-modal';

function GamesListDropdown(props) {
  const { game } = props;

  return (
    <Consumer>
      {value => {
        const { dispatch } = value;

        const onClickDelete = () => {
          dispatch({ type: 'DELETE_GAME', payload: game.id });
        };

        return (
          <React.Fragment>
            <div className="dropdown">
              <button
                className="btn btn-link btn-sm dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-ellipsis-v" />
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Link to="/" className="dropdown-item" href="#">
                  <i className="fas fa-edit" /> Edit
                </Link>
                <button className="dropdown-item btn" onClick={onClickDelete}>
                  <i className="far fa-trash-alt" /> Delete
                </button>
              </div>
            </div>
          </React.Fragment>
        );
      }}
    </Consumer>
  );
}

export default GamesListDropdown;
