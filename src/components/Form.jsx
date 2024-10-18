import React, { useState } from 'react';

const Form = ({ cadastrarPessoa }) => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [egresso, setEgresso] = useState(false);
  const [pago, setPago] = useState(false);
  const [foto, setFoto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    cadastrarPessoa({ nome, telefone, egresso, pago, foto });
    setNome('');
    setTelefone('');
    setEgresso(false);
    setPago(false);
    setFoto('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Cadastro</h2>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />
        <label>
          Egresso/Convidado:
          <input type="checkbox" checked={egresso} onChange={() => setEgresso(!egresso)} />
        </label>
        <br />
        <label>
          Pago:
          <input type="checkbox" checked={pago} onChange={() => setPago(!pago)} />
        </label>
        <input
          type="url"
          placeholder="URL da Foto"
          value={foto}
          onChange={(e) => setFoto(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Form;
