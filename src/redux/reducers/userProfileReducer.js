const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_PROFILE_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_USER_PROFILE_SUCCESS':
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case 'FETCH_USER_PROFILE_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'UPDATE_USER_PROFILE_REQUEST':
      return { ...state, loading: true, error: null };
    case 'UPDATE_USER_PROFILE_SUCCESS':
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case 'UPDATE_USER_PROFILE_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userProfileReducer;