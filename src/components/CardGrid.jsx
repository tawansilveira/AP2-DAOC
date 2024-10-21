import React from 'react';
import Card from './Card';

const CardGrid = ({ pessoas }) => {
  return (
    <article className='container mt-16'>
      <div className='p-3 border-b-gray-800 border-opacity-80 border-b bg-gray-900 shadow-md'>
        <h2 className='text-center font-bold text-3xl sm:text-3xl'>Psicopatas que se inscreveram</h2>
      </div>
      <div className="card-grid grid grid-cols-5 gap-6 my-4 mx-5">
        {pessoas.map((pessoa, index) => (
          <Card key={index} pessoa={pessoa} />
        ))}
      </div>
    </article>
  );
};

export default CardGrid;
