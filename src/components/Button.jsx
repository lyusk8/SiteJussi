import './Button.css';
import React from 'react';

const Button = (props) => {
  return (
    <button id={props.id} className="button">
      <p>{props.texto}</p>
    </button>
  );
};
export default Button;
