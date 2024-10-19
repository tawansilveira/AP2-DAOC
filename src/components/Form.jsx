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
    <div className="form-container container">
      <form onSubmit={handleSubmit} className='flex flex-col *:my-1' >
        <h2>Cadastro</h2>
        <input
          className='rounded-md px-2'
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          className='rounded-md px-2'
          type="text"
          placeholder="Digite seu telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />
        <div className='flex flex-row'>
          <label className=''>
            Egresso/Convidado:
            <input className='ml-2' type="checkbox" checked={egresso} onChange={() => setEgresso(!egresso)} />
          </label>
        </div>
        <div>
          <label>
            Pago:
          <input className='ml-2' type="checkbox" checked={pago} onChange={() => setPago(!pago)} />
          </label>
        </div>
        <input
          className='rounded-md px-2'
          type="url"
          placeholder="URL da Foto"
          value={foto}
          onChange={(e) => setFoto(e.target.value)}
        />
        <div className='flex justify-center'>
          <button className='w-52 hover:border-indigo-500 active:bg-indigo-900 active:bg-opacity-30' type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
