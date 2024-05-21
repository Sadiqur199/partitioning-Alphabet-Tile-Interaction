import React from 'react';
import AlphabetTile from '../component/AlphabetTile/AlphabetTile';
import Partition from '../component/Partition/Partition';

const Main = () => {
  return (
    <div>
      <div className='mb-[100px]'>
      <Partition ></Partition>
      </div>
      <AlphabetTile></AlphabetTile>
    </div>
  );
};

export default Main;