// Financial Utilities
export const calculateTaxLiability = (income, financialYear) => {
    // Implement Indian tax calculation logic based on financial year
    const taxSlabs = {
      '2023-2024': [
        { min: 0, max: 300000, rate: 0 },
        { min: 300001, max: 600000, rate: 0.05 },
        { min: 600001, max: 900000, rate: 0.10 },
        { min: 900001, max: 1200000, rate: 0.15 },
        { min: 1200001, max: 1500000, rate: 0.20 },
        { min: 1500001, Infinity, rate: 0.30 }
      ]
    };
  
    const currentSlabs = taxSlabs[financialYear];
    let totalTax = 0;
  
    for (let slab of currentSlabs) {
      if (income > slab.min) {
        const taxableAmount = Math.min(income, slab.max) - slab.min;
        totalTax += taxableAmount * slab.rate;
      }
    }
  
    return totalTax;
  };
  
  // Date Utilities
  export const formatDate = (date, format = 'dd/mm/yyyy') => {
    const d = new Date(date);
    const formatters = {
      'dd/mm/yyyy': () => 
        `${d.getDate().toString().padStart(2, '0')}/${
          (d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`,
      'yyyy-mm-dd': () => 
        `${d.getFullYear()}-${
          (d.getMonth() + 1).toString().padStart(2, '0')}-${
          d.getDate().toString().padStart(2, '0')}`,
      'full': () => d.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };
  
    return formatters[format] ? formatters[format]() : d.toISOString();
  };
  
  // Number Utilities
  export const formatCurrency = (amount, currency = 'INR') => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };
  
  // File Utilities
  export const getFileType = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    const types = {
      'pdf': 'application/pdf',
      'doc': 'application/msword',
      'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'png': 'image/png',
      'csv': 'text/csv',
      'xls': 'application/vnd.ms-excel',
      'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    };
  
    return types[extension] || 'application/octet-stream';
  };
  
  // Validation Enhancements
  export const complexPasswordValidator = (password) => {
    const validations = [
      { 
        test: (p) => p.length >= 12, 
        message: 'Password must be at least 12 characters long' 
      },
      { 
        test: (p) => /[A-Z]/.test(p), 
        message: 'Password must contain at least one uppercase letter' 
      },
      { 
        test: (p) => /[a-z]/.test(p), 
        message: 'Password must contain at least one lowercase letter' 
      },
      { 
        test: (p) => /[0-9]/.test(p), 
        message: 'Password must contain at least one number' 
      },
      { 
        test: (p) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(p), 
        message: 'Password must contain at least one special character' 
      }
    ];
  
    const failedValidations = validations
      .filter(validation => !validation.test(password))
      .map(validation => validation.message);
  
    return {
      isValid: failedValidations.length === 0,
      errors: failedValidations
    };
  };