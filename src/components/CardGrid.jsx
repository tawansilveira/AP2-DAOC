import React from 'react';
import Card from './Card';

const CardGrid = ({ pessoas }) => {
  return (
    <div className="card-grid container grid-flow-row">
      {pessoas.map((pessoa, index) => (
        <Card key={index} pessoa={pessoa} />
      ))}
    </div>
  );
};

export default CardGrid;
