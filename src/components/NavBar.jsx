import './NavBar.css';
import React from 'react';
import Busca from './Busca';

const NavBar = (props) => {
  return (
    <header id="cabecalho">
      <div className="menu">
        <div className="logo">
          <a href="#">
            <div className="jussi"></div>
          </a>
        </div>
        <nav id="nav-bar">
          <a href="#">
            <div className="link">
              <p>Nossas soluções </p>
            </div>
          </a>
          <a href="#">
            <div className="link">
              <p> Conheça a Jüssi</p>
            </div>
          </a>
        </nav>
      </div>
      <Busca />
    </header>
  );
};
export default NavBar;
