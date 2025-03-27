import { useSelector, useDispatch } from 'react-redux';
import { fetchDocuments, uploadDocument } from '../redux/actions/documentActions';

export const useDocuments = () => {
  const dispatch = useDispatch();
  const documents = useSelector(state => state.documents.documents);
  const loading = useSelector(state => state.documents.loading);
  const error = useSelector(state => state.documents.error);

  const loadDocuments = () => {
    dispatch(fetchDocuments());
  };

  const uploadNewDocument = (file, metadata) => {
    const formData = new FormData();
    formData.append('file', file);
    Object.keys(metadata).forEach(key => {
      formData.append(key, metadata[key]);
    });
    dispatch(uploadDocument(formData));
  };

  return {
    documents,
    loading,
    error,
    loadDocuments,
    uploadNewDocument
  };
};