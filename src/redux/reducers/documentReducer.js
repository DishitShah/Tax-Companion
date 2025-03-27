const initialState = {
  documents: [],
  loading: false,
  error: null
};

export const documentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DOCUMENTS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_DOCUMENTS_SUCCESS':
      return {
        ...state,
        documents: action.payload,
        loading: false
      };
    case 'FETCH_DOCUMENTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'UPLOAD_DOCUMENT_REQUEST':
      return { ...state, loading: true, error: null };
    case 'UPLOAD_DOCUMENT_SUCCESS':
      return {
        ...state,
        documents: [...state.documents, action.payload],
        loading: false
      };
    case 'UPLOAD_DOCUMENT_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default documentReducer;