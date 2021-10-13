import './Newletter.css';
import React from 'react';

const Newletter = (props) => {
  return (
    <section id="newletter">
      <div id="newsletter">
        <p>
          receba novidades da nossa área <br /> de produtos digitais.
        </p>
      </div>
      <div id="titleNewsletter">
        <input id="input" type="text" placeholder="Digite seu e-mail" />
        <button id="cadastrar" type="submit">
          <p>cadastrar</p>
        </button>
      </div>
    </section>
  );
};
export default Newletter;
