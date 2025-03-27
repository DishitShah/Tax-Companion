import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDocuments } from '../../redux/actions/documentActions';
import DocumentDetails from './DocumentDetails';

const DocumentList = () => {
  const dispatch = useDispatch();
  const documents = useSelector(state => state.documents.documents);

  useEffect(() => {
    dispatch(fetchDocuments());
  }, [dispatch]);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">My Documents</h2>
      <ul className="space-y-4">
        {documents.map(doc => (
          <li key={doc.id} className="bg-gray-100 p-4 rounded-lg">
            <DocumentDetails document={doc} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;