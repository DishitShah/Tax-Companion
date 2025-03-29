// Utility functions for financial calculations according to Indian taxation

/**
 * Calculate the tax liability based on income and deductions.
 * @param {number} income - The income amount.
 * @param {number} deductions - The deductions amount.
 * @return {number} The calculated tax liability.
 */
function calculateTaxLiability(income, deductions) {
    const taxableIncome = income - deductions;
    let taxLiability = 0;
  
    if (taxableIncome <= 250000) {
      // No tax for income up to 2.5 lakh
      taxLiability = 0;
    } else if (taxableIncome <= 500000) {
      // 5% tax for income between 2.5 lakh and 5 lakh
      taxLiability = (taxableIncome - 250000) * 0.05;
    } else if (taxableIncome <= 1000000) {
      // 20% tax for income between 5 lakh and 10 lakh
      taxLiability = 250000 * 0.05 + (taxableIncome - 500000) * 0.20;
    } else {
      // 30% tax for income above 10 lakh
      taxLiability = 250000 * 0.05 + 500000 * 0.20 + (taxableIncome - 1000000) * 0.30;
    }
  
    // Add cess of 4% on the calculated tax
    taxLiability += taxLiability * 0.04;
  
    return taxLiability;
  }
  
  module.exports = {
    calculateTaxLiability,
  };