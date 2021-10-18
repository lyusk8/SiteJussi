import './Busca.css';
import React, { useState } from 'react';
import axios from 'axios';

const Busca = () => {
  let [endereco, setEndereco] = useState({});
  let [valor, setValor] = useState('');

  const buscar = (cep) => {
    const api = axios.create({ baseURL: 'http://viacep.com.br/ws/' });
    api.get(`${cep}/json`).then((response) => {
      setEndereco(response);
      setValor(`${response.data.logradouro} - ${response.data.bairro}`);
    });
  };

  return (
    <div id="search">
      <input
        onChange={(e) => setValor(e.target.value)}
        id="interno"
        placeholder="Busca"
        value={valor}
      />

      <div id="lupa" onClick={() => buscar(valor)} />
      <span id="login">Login</span>
      <div className="carrinho" />
    </div>
  );
};
export default Busca;
