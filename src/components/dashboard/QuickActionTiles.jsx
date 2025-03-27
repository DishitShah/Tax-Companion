import React from 'react';

const QuickActionTiles = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-8">
      <button className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600">
        Tax Calculator
      </button>
      <button className="bg-green-500 text-white p-4 rounded hover:bg-green-600">
        Upload Documents
      </button>
      <button className="bg-purple-500 text-white p-4 rounded hover:bg-purple-600">
        File ITR
      </button>
      <button className="bg-red-500 text-white p-4 rounded hover:bg-red-600">
        Get Help
      </button>
    </div>
  );
};

export default QuickActionTiles;