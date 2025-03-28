const express = require('express');
const { calculateTax, getTaxCalculations } = require('../controllers/taxCalculatorController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
  .post(protect, calculateTax)
  .get(protect, getTaxCalculations);

module.exports = router;