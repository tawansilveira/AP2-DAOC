// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Localizacao from './components/Localizacao';
import CardGrid from './components/CardGrid';
import Form from './components/Form';
import './App.css';

const App = () => {
  const [pessoas, setPessoas] = useState([]);

  const buscarLocalizacao = (cep) => {
    return fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json());
  };

  const cadastrarPessoa = (novaPessoa) => {
    setPessoas(prevPessoas => [...prevPessoas, novaPessoa].sort((a, b) => a.nome.localeCompare(b.nome)));
  };

  return (
    <div>
      <Header />
      <div className="container">
        <Localizacao buscarLocalizacao={buscarLocalizacao} />
        <CardGrid pessoas={pessoas} />
        <Form cadastrarPessoa={cadastrarPessoa} />
      </div>
    </div>
  );
};

export default App;
