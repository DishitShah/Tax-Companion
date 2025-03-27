import React from 'react';

const DocumentDetails = ({ document }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold">{document.name}</h3>
      <p className="text-gray-600">Uploaded on: {new Date(document.uploadedAt).toLocaleDateString()}</p>
      <p className="text-gray-600">Status: {document.status}</p>
      <a 
        href={document.downloadUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Download
      </a>
    </div>
  );
};

export default DocumentDetails;