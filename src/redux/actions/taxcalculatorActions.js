import { calculateTaxLiability } from '../../utils/financialUtils';

export const calculateTax = (formData) => async (dispatch) => {
  dispatch({ type: 'CALCULATE_TAX_REQUEST' });

  try {
    const taxLiability = calculateTaxLiability(formData.income, formData.financialYear);
    dispatch({ type: 'CALCULATE_TAX_SUCCESS', payload: taxLiability });
  } catch (error) {
    dispatch({ type: 'CALCULATE_TAX_FAILURE', payload: error.message });
  }
};

export const saveTaxCalculation = (calculation) => async (dispatch) => {
  dispatch({ type: 'SAVE_TAX_CALCULATION', payload: calculation });
};