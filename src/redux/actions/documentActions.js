import DocumentService from '../../services/documentService';

export const fetchDocuments = () => async (dispatch) => {
  dispatch({ type: 'FETCH_DOCUMENTS_REQUEST' });

  try {
    const documents = await DocumentService.getDocuments();
    dispatch({ type: 'FETCH_DOCUMENTS_SUCCESS', payload: documents });
  } catch (error) {
    dispatch({ type: 'FETCH_DOCUMENTS_FAILURE', payload: error.message });
  }
};

export const uploadDocument = (formData, config) => async (dispatch) => {
  dispatch({ type: 'UPLOAD_DOCUMENT_REQUEST' });

  try {
    const document = await DocumentService.uploadDocument(formData, config);
    dispatch({ type: 'UPLOAD_DOCUMENT_SUCCESS', payload: document });
  } catch (error) {
    dispatch({ type: 'UPLOAD_DOCUMENT_FAILURE', payload: error.message });
  }
};