import React from 'react';

const FilingStatus = ({ status }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Filing Status</h2>
      <p className="text-gray-600">Status: {status}</p>
    </div>
  );
};

export default FilingStatus;