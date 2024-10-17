import React from 'react';

const Card = ({ pessoa }) => {
  return (
    <div className="card">
      <img src={pessoa.foto} alt={pessoa.nome} />
      <h3>{pessoa.nome}</h3>
      <p>{pessoa.egresso ? (pessoa.pago ? 'Confirmado' : 'Não Confirmado') : 'Estudante Não Confirmado'}</p>
    </div>
  );
};

export default Card;
