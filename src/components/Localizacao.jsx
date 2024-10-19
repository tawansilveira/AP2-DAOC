import React, { useState, useEffect } from 'react';

const Localizacao = ({ buscarLocalizacao, rua = 'Avenida Principal' }) => {
  const [cep, setCep] = useState('');
  const [localizacao, setLocalizacao] = useState({});
  const [horario, setHorario] = useState('');
  const [erro, setErro] = useState('');

  const handleBuscar = async () => {
    try {
      const data = await buscarLocalizacao(cep);
      if (!data || !data.cep) {
        setErro('CEP inválido ou não encontrado.');
        setLocalizacao({});
      } else {
        setErro('');
        setLocalizacao(data);
      }
    } catch (error) {
      setErro('Erro ao buscar a localização. Tente novamente.');
      setLocalizacao({});
    }
  };

  useEffect(() => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setHorario(formattedTime);
  }, []);

  return (
    <div className="localizacao container flex flex-col">
      <h2>Localização</h2>
      <div className='inline-flex flex-row space-x-2 mt-2'>
        <input
          className='rounded-md px-2'
          type="text"
          placeholder="Digite o CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <button className='hover:border-indigo-500 active:bg-indigo-900 active:bg-opacity-30'
                onClick={handleBuscar}>
          Buscar Localização
        </button>
      </div>

      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      {localizacao && localizacao.cep && (
        <div className='mt-2'>
          <p>CEP: {localizacao.cep}</p>
          <p>CIDADE: {localizacao.localidade}</p>
          <p>BAIRRO: {localizacao.bairro || 'Bairro não disponível'}</p>
          <p>AV/RUA: {rua}</p>
          <p>HORÁRIO: {horario}</p>
        </div>
      )}
    </div>
  );
};

export default Localizacao;

