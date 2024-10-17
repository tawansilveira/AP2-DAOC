import React from 'react';
import Card from './Card';

const CardGrid = ({ pessoas }) => {
  return (
    <div className="card-grid">
      {pessoas.map((pessoa, index) => (
        <Card key={index} pessoa={pessoa} />
      ))}
    </div>
  );
};

export default CardGrid;
