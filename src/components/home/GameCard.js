import React from 'react';
import { Link } from 'react-router-dom';

export default function GameCard(props) {
  const { cover, name } = props.game;

  const newCover = cover.url.replace('thumb', 'cover_big');

  return (
    <div className="card h-100">
      <a href="#">
        <img
          className="card-img-top w-100"
          src={newCover}
          style={style.cover}
        />
      </a>
      <div className="card-body">
        <h4 className="card-title">
          <Link to="/">{name}</Link>
        </h4>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
          aspernatur!
        </p>
      </div>
      <div className="card-footer ">
        <button className="btn btn-primary btn-block">Game Page</button>
      </div>
    </div>
  );
}

const style = {
  cover: {
    height: '374px',
    width: '264px'
  }
};
