import React from 'react';
import DocumentUpload from '../components/documents/DocumentUpload';
import DocumentList from '../components/documents/DocumentList';

const DocumentsPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <DocumentUpload />
      <DocumentList />
    </div>
  );
};

export default DocumentsPage;