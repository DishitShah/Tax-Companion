import React, { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

const FilingAssistant = () => {
  const [formData, setFormData] = useState({
    name: '',
    pan: '',
    financialYear: '',
    income: '',
    deductions: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Filing Assistant</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <Input 
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
          <Input 
            name="pan"
            label="PAN"
            value={formData.pan}
            onChange={handleInputChange}
            placeholder="Enter your PAN"
          />
          <Input 
            name="financialYear"
            label="Financial Year"
            value={formData.financialYear}
            onChange={handleInputChange}
            placeholder="Enter financial year"
          />
          <Input 
            name="income"
            label="Income"
            value={formData.income}
            onChange={handleInputChange}
            placeholder="Enter your income"
          />
          <Input 
            name="deductions"
            label="Deductions"
            value={formData.deductions}
            onChange={handleInputChange}
            placeholder="Enter deductions"
          />
        </div>
        <Button className="mt-4 w-full" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FilingAssistant;