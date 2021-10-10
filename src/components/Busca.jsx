import './Busca.css';
import React from 'react';

export default (props) => {
  return (
    <div className="busca">
      <input className="interno" type="text" placeholder="Busca" />
      <span className="login">Login</span>
      <div className="carrinho"></div>
    </div>
  );
};
