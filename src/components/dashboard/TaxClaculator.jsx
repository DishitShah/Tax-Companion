import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTax, saveTaxCalculation } from '../../redux/actions/taxCalculatorActions';
import Input from '../common/Input';
import Button from '../common/Button';
import Chart from '../common/Chart';

const TaxCalculator = () => {
  const [formData, setFormData] = useState({
    annualIncome: '',
    investments: '',
    deductions: '',
    dependents: 0,
    taxRegime: 'old' // old or new regime
  });

  const dispatch = useDispatch();
  const taxCalculation = useSelector(state => state.taxCalculator.calculation);
  const [calculationResult, setCalculationResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCalculateTax = () => {
    // Validate inputs
    const calculation = dispatch(calculateTax(formData));
    setCalculationResult(calculation);
    dispatch(saveTaxCalculation(calculation));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold text-blue-900">Tax Calculator</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <Input 
          type="number"
          name="annualIncome"
          label="Annual Income"
          value={formData.annualIncome}
          onChange={handleInputChange}
          placeholder="Enter total annual income"
        />
        
        <Input 
          type="number"
          name="investments"
          label="Investments"
          value={formData.investments}
          onChange={handleInputChange}
          placeholder="Total investments for tax saving"
        />
        
        <Input 
          type="number"
          name="deductions"
          label="Deductions"
          value={formData.deductions}
          onChange={handleInputChange}
          placeholder="Additional deductions"
        />
        
        <div>
          <label className="block mb-2">Tax Regime</label>
          <select 
            name="taxRegime"
            value={formData.taxRegime}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          >
            <option value="old">Old Regime</option>
            <option value="new">New Regime</option>
          </select>
        </div>
      </div>
      
      <Button 
        onClick={handleCalculateTax}
        className="mt-4 w-full"
      >
        Calculate Tax
      </Button>
      
      {calculationResult && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Tax Calculation Results</h3>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <p>Total Income: ₹{calculationResult.totalIncome}</p>
              <p>Taxable Income: ₹{calculationResult.taxableIncome}</p>
              <p>Tax Liability: ₹{calculationResult.taxLiability}</p>
            </div>
            <Chart 
              type="pie"
              data={{
                labels: ['Tax', 'Deductions', 'Investments'],
                datasets: [{
                  data: [
                    calculationResult.taxLiability, 
                    calculationResult.deductions, 
                    calculationResult.investments
                  ]
                }]
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TaxCalculator;