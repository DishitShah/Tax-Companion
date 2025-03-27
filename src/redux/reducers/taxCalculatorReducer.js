const initialState = {
  calculation: null,
  loading: false,
  error: null,
};

export const taxCalculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CALCULATE_TAX_REQUEST':
      return { ...state, loading: true, error: null };
    case 'CALCULATE_TAX_SUCCESS':
      return {
        ...state,
        calculation: action.payload,
        loading: false,
        error: null,
      };
    case 'CALCULATE_TAX_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default taxCalculatorReducer;