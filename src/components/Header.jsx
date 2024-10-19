import React from 'react';

const Header = () => {
  return (
    <div className='container bg-gray-900 p-2 border-b-2 border-solid border-gray-950 shadow-xl sticky'>
      <header className='object-center text-center'>
        <h1 className='header font-extrabold text-5xl m-2 sm:text-3xl'>Entrevero da Computação</h1>
        <h3 className='header text-xl pt-1 pb-2 sm:text-base sm:pt-0'>Venha participar de mais um evento conosco</h3>
      </header>
    </div>
  );
};

export default Header;
