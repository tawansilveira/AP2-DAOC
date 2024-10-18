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
    <div className="localizacao">
      <h2>Localização</h2>
      <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />
      <button onClick={handleBuscar}>Buscar Localização</button>

      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      {localizacao && localizacao.cep && (
        <div>
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

