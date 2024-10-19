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
      <article className="container content-wrapper flex sm:flex-wrap mt-10 *:mx-6 sm:mx-2">
        <Localizacao buscarLocalizacao={buscarLocalizacao} />
        <Form cadastrarPessoa={cadastrarPessoa} />
      </article>
      <CardGrid pessoas={pessoas} />
    </div>
  );
};

export default App;
