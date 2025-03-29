const mongoose = require('mongoose');

const taxCalculationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  income: {
    type: Number,
    required: true,
  },
  deductions: {
    type: Number,
    required: true,
  },
  taxLiability: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true
});

const TaxCalculation = mongoose.model('TaxCalculation', taxCalculationSchema);

module.exports = TaxCalculation;