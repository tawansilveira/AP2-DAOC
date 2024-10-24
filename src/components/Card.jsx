import React from 'react';

const Card = ({ pessoa }) => {
  return (
    <div
    className='card text-center bg-gray-900 rounded-2xl p-2 shadow-md
    transform-gpu hover:-translate-y-1 transition hover:ease-in-out hover:drop-shadow-md'>
      <div className='card-container aspect-square'>
        <img
        className='card-image rounded-2xl shadow-lg shadow-gray-950 h-full w-full'
        src={pessoa.foto} alt={pessoa.nome} />
      </div>
      <h3 className='text-xl md:text-sm font-semibold mt-1 leading-tight mb-2'>{pessoa.nome}</h3>
      <div className='flex flex-col flex-grow'>
          <p className='text-sm'>
            {pessoa.egresso ? 'Egresso/Convidado' : 'Estudante'}
          </p>
          <p className='text-sm'>
            {(pessoa.pago ? 'Confirmado' : 'Não Confirmado')}
          </p>
      </div>
    </div>
  );
};


export default Card;
