import './Box.css';
import React from 'react';
import Button from './Button';

const Box = (props) => {
  return (
    <div id="box">
      <div id="imagem">{props.imagem}</div>
      <div id="conteudo">
        <p id="nome">{props.nome}</p>
        <p id="descricao">{props.descricao}</p>
        <ul id="tabela">
          <li> Feature 1</li>
          <li> Feature 2</li>
          <li> Feature 3</li>
        </ul>
        <Button id="buttonBox" texto="Ver solução" />
      </div>
    </div>
  );
};

export default Box;
