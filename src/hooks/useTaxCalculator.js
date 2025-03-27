import { useSelector, useDispatch } from 'react-redux';
import { calculateTax, saveTaxCalculation } from '../redux/actions/taxCalculatorActions';

export const useTaxCalculator = () => {
  const dispatch = useDispatch();
  const taxCalculation = useSelector(state => state.taxCalculator.calculation);
  const loading = useSelector(state => state.taxCalculator.loading);
  const error = useSelector(state => state.taxCalculator.error);

  const calculate = (formData) => {
    dispatch(calculateTax(formData));
  };

  const saveCalculation = (calculation) => {
    dispatch(saveTaxCalculation(calculation));
  };

  return {
    taxCalculation,
    loading,
    error,
    calculate,
    saveCalculation
  };
};