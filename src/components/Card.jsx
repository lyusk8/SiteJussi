import './Card.css';
import './Button.css';
import React from 'react';

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
