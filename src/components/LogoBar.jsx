import './LogoBar.css';
import React from 'react';

const LogoBar = (props) => {
  return (
    <div id="logoBar">
      <div id="texto-logo">
        <div id="um" className="marcas">
          Nossas principais lojas VTEX
        </div>
        <div id="dois" className="marcas">
          →
        </div>
        <div id="tres" className="marcas"></div>
        <div id="quatro" className="marcas"></div>
        <div id="cinco" className="marcas"></div>
        <div id="seis" className="marcas"></div>
      </div>
    </div>
  );
};
export default LogoBar;
