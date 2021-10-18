import './HeroBanner.css';
import React from 'react';
import Card from './Card';
import Button from './Button';

const HeroBanner = () => {
  return (
    <main id="banner">
      <p id="titulo">
        CRIAMOS <br /> LOJAS QUE <br /> VENDEM MAIS.
      </p>

      <p id="text">
        A Jüssi é especialista na criação de lojas <br /> usando a plataforma
        VTEX. Precisa criar sua <br /> lojas ou migrar de plataforma?
      </p>
      <Button id="buttonBanner" texto="Veja nossas soluções" />

      <div id="cards">
        <Card id="card1" texto="Mais Detalhes" img="img1" />
        <Card id="card2" texto="Comprar em 12x" img="img2" />
        <Card id="card3" texto="Adicionar à sacola" img="img3" />
      </div>
    </main>
  );
};
export default HeroBanner;
