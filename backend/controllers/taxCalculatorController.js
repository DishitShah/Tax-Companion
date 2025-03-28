const TaxCalculation = require('../models/TaxCalculation');
const { calculateTaxLiability } = require('../utils/financialUtils');

const calculateTax = async (req, res) => {
  const { income, deductions } = req.body;

  const taxLiability = calculateTaxLiability(income, deductions);

  const taxCalculation = new TaxCalculation({
    user: req.user._id,
    income,
    deductions,
    taxLiability,
  });

  const createdCalculation = await taxCalculation.save();

  res.status(201).json(createdCalculation);
};

const getTaxCalculations = async (req, res) => {
  const calculations = await TaxCalculation.find({ user: req.user._id });
  res.json(calculations);
};

module.exports = { calculateTax, getTaxCalculations };