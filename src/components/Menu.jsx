import './Menu.css';
import React from 'react';
import Procura from './Busca';
import Busca from './Busca';

export default (props) => {
  return (
    <header className="nav-bar">
      <div className="menu">
        <div className="logo">
          <a href="#">
            <div className="jussi"></div>
          </a>
        </div>

        <nav>
          <ul>
            <li>
              <a href="#">
                <p>Nossas soluções </p>
              </a>
            </li>
            <li>
              <a href="#">
                <p> Conheça a Jüssi</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Busca />
    </header>
  );
};
