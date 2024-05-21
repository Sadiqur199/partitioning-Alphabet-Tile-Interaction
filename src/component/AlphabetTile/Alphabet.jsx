import React from 'react';

const Alphabet = ({ letter, onClick }) => {
  return (
    <div
      className="w-12 h-12 flex items-center justify-center m-1 bg-blue-500 text-white cursor-pointer"
      onClick={() => onClick(letter)}
    >
      {letter}
    </div>
  );
};

export default Alphabet;