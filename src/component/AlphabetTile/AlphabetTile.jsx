import React, { useState } from 'react';
import Alphabet from './Alphabet';

const AlphabetTile = () => {
  const [outputString, setOutputString] = useState('');

  const handleTileClick = (letter) => {
    let newString = outputString + letter;

    // Replace sequences of three or more consecutive identical letters with underscores
    const regex = /(.)\1{2,}/g;
    newString = newString.replace(regex, (match) => '_'.repeat(match.length));

    setOutputString(newString);
  };

  return (
    <div>
            <h1 className='mt-10 font-bold text-4xl mb-5 m-10'>Alphabet Tile Interaction</h1>
      <hr />
    <div className="flex flex-col items-center p-4">
      <div id="outputString" className="mb-4 p-2 text-xl border border-gray-300 w-full text-center">
        {outputString}
      </div>
      <div className="grid grid-cols-6 gap-2">
        {[...Array(26)].map((_, i) => {
          const letter = String.fromCharCode(65 + i);
          return <Alphabet key={letter} letter={letter} onClick={handleTileClick} />;
        })}
      </div>
    </div>
    </div>
  );
};
export default AlphabetTile;
