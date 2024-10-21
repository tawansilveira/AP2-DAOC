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
    <div className="form-container container bg-gray-900 p-3 rounded-lg">
      <form onSubmit={handleSubmit} className='flex flex-col *:my-1' >
        <h2 className='text-center font-semibold text-2xl !mb-2'>Cadastro</h2>
        <input
          className='rounded-md px-2 focus:outline-none focus:ring-indigo-500 focus:ring-1'
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          className='rounded-md px-2 focus:outline-none focus:ring-indigo-500 focus:ring-1'
          type="text"
          placeholder="Digite seu telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />
        <div className='flex flex-row'>
          <label >
            Egresso/Convidado:
            <input className='ml-2'
            type="checkbox" checked={egresso} onChange={() => setEgresso(!egresso)} />
          </label>
        </div>
        <div>
          <label>
            Pago:
          <input className='ml-2' type="checkbox" checked={pago} onChange={() => setPago(!pago)} />
          </label>
        </div>
        <input
          className='rounded-md px-2 focus:outline-none focus:ring-indigo-500 focus:ring-1'
          type="url"
          placeholder="URL da Foto"
          value={foto}
          onChange={(e) => setFoto(e.target.value)}
          required
        />
        <div className='flex justify-center'>
          <button className='w-52 hover:border-indigo-500 active:bg-indigo-900 active:bg-opacity-30' type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
