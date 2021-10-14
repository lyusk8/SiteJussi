import './NavBar.css';
import React, { useState } from 'react';
import Busca from './Busca';
import OurSolutions from './OurSolutions';
import JussiSession from './JussiSession';
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

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
          <Link to="/OurSolutions">
            <div className="link">
              <p>Nossas soluções </p>
            </div>
          </Link>
          <Link to="/JussiSession">
            <div className="link">
              <p> Conheça a Jüssi</p>
            </div>
          </Link>
        </nav>
      </div>
      <Busca />
      <Switch>
        <Route path="/OurSolutions" component={OurSolutions}>
          <OurSolutions />
        </Route>
        <Route path="/JussiSession" component={JussiSession}>
          <JussiSession />
        </Route>
      </Switch>
    </header>
  );
};
export default NavBar;
