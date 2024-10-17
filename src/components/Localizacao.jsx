import React, { useState } from 'react';

const Localizacao = ({ buscarLocalizacao }) => {
  const [cep, setCep] = useState('');
  const [localizacao, setLocalizacao] = useState({});

  const handleBuscar = () => {
    buscarLocalizacao(cep).then(data => setLocalizacao(data));
  };

  return (
    <div className="localizacao">
      <h2>Localização</h2>
      <input 
        type="text" 
        placeholder="Digite o CEP" 
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />
      <button onClick={handleBuscar}>Localização</button>
      {localizacao && (
        <div>
          <p>CEP: {localizacao.cep}</p>
          <p>CIDADE: {localizacao.localidade}</p>
          <p>BAIRRO: {localizacao.bairro}</p>
          <p>AV/RUA: {localizacao.logradouro}</p>
        </div>
      )}
    </div>
  );
};

export default Localizacao;
