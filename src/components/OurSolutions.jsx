import './OurSolutions.css';
import React from 'react';
import Box from './Box';

const OurSolutions = () => {
  return (
    <section id="section">
      <div id="titleSolution">
        <p id="barras">//</p>
        <p id="textSolution">nossas soluções</p>
      </div>
      <div id="solution">
        <Box
          imagem="P1"
          nome="Nome do Produto #1"
          descricao="Descrição do produto #1"
        />
        <Box
          imagem="P2"
          nome="Nome do Produto #2"
          descricao="Descrição do produto #2"
        />
        <Box
          imagem="P3"
          nome="Nome do Produto #3"
          descricao="Descrição do produto #3"
        />
        <Box
          imagem="P4"
          nome="Nome do Produto #4"
          descricao="Descrição do produto #4"
        />
      </div>
    </section>
  );
};
export default OurSolutions;
