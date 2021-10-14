import './Busca.css';
import React from 'react';

const Busca = (props) => {
  return (
    <div className="busca">
      <div id="search">
        <input className="interno" type="search" placeholder="Busca" />
        <a href="">
          <div id="lupa"></div>
        </a>
      </div>
      <p className="login">Login</p>
      <div className="carrinho"></div>
    </div>
  );
};
export default Busca;
