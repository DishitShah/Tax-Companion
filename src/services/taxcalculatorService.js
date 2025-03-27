import axios from './api';

class TaxCalculatorService {
  async calculateTax(data) {
    try {
      const response = await axios.post('/tax/calculate', data);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error) {
    console.error('Tax Calculator Service Error:', error.response?.data || error.message);
    throw error;
  }
}

export default new TaxCalculatorService();