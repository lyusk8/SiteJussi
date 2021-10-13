import './JussiSession.css';
import React from 'react';
import Button from './Button';

const JussiSession = (props) => {
  return (
    <section id="session">
      <div id="title-text">
        <div id="titleSession">
          <p id="textTitle">OLÁ, SOMOS A JÜSSI</p>
        </div>
        <p id="textSession">
          A Jüssi é uma agência integrante do grupo global WPP que vem há 10
          anos consolidando o pensamento voltado para produtos e resolução de
          problemas. Nosso área dedicada exclusivamente para Produtos Digitais é
          organizada em 6 especialidades: Product Managamenet, User Experience
          Design, SEO, Tecnologia, Agile e User Behavior Analytics.
        </p>
        <Button id="buttonSession" texto="Conheça a Jüssi" />
      </div>
      <div id="imagemJüssi"></div>
      <div id="quadrado"></div>
    </section>
  );
};
export default JussiSession;
