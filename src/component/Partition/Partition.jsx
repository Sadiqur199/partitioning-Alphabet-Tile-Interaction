import React, { useState } from 'react';
import Split from 'split.js';

function getRandomColor() {
  const colors = [
    'rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 206, 86)',
    'rgb(75, 192, 192)', 'rgb(153, 102, 255)', 'rgb(255, 159, 64)'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function Partition({ initialColor = getRandomColor() }) {
  const [partitions, setPartitions] = useState([{ color: initialColor, id: 1 }]);

  const splitPartition = (index, direction) => {
    const newPartitions = [...partitions];
    const newColor = getRandomColor();
    const newPartition = { color: newColor, id: newPartitions.length + 1 };
    
    newPartitions.splice(index + 1, 0, newPartition);
    setPartitions(newPartitions);

    setTimeout(() => {
      Split(newPartitions.map((_, idx) => `#partition-${idx}`), {
        direction: direction === 'vertical' ? 'horizontal' : 'vertical',
        sizes: Array(newPartitions.length).fill(100 / newPartitions.length),
        minSize: 100,
        gutterSize: 10,
        snapOffset: 10,
      });
    }, 0);
  };

  const removePartition = (index) => {
    if (partitions.length <= 1) return; 
    const newPartitions = [...partitions];
    newPartitions.splice(index, 1);
    setPartitions(newPartitions);
  };

  return (
    <div>
      <h1 className='mt-5 font-bold text-4xl mb-5 m-10'>Recursive-partitioning</h1>
      <hr />
    <div className="flex flex-1 w-full h-full ml-10 mt-3">
      {partitions.map((partition, index) => (
        <div
          key={partition.id}
          id={`partition-${index}`}
          className="partition flex-1 relative"
          style={{ backgroundColor: partition.color }}
        >
          <div className="absolute top-2 left-2 space-x-2 z-10">
            <button
              className="px-2 py-1 bg-blue-500 text-white rounded"
              onClick={() => splitPartition(index, 'vertical')}
            >
              V
            </button>
            <button
              className="px-2 py-1 bg-green-500 text-white rounded"
              onClick={() => splitPartition(index, 'horizontal')}
            >
              H
            </button>
            <button
              className="px-2 py-1 bg-red-500 text-white rounded"
              onClick={() => removePartition(index)}
            >
              -
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Partition;
