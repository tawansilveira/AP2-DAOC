import React from 'react';

const Card = ({ pessoa }) => {
  return (
    <div className="card">
      <img src={pessoa.foto} alt={pessoa.nome} />
      <h3>{pessoa.nome}</h3>
      <p>{pessoa.egresso ? 'Egresso/Convidado' : 'Estudante'}</p>
      <p>{(pessoa.pago ? 'Confirmado' : 'Não Confirmado')}</p>
    </div>
  );
};

export default Card;
