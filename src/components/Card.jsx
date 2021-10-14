import './Card.css';
import React from 'react';
import Button from './Button';

const Card = (props) => {
  return (
    <div id={props.id} className="card">
      <div id={props.img}></div>
      <button id="buttonCard">
        <p id="texto">{props.texto}</p>
      </button>
    </div>
  );
};
export default Card;
