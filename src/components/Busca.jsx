import './Busca.css';
import React from 'react';

const Busca = (props) => {
  return (
    <div className="busca">
      <div id="search">
        <input className="interno" type="text" placeholder="Busca" />
        <div id="lupa"></div>
      </div>
      <span className="login">Login</span>
      <div className="carrinho"></div>
    </div>
  );
};
export default Busca;
