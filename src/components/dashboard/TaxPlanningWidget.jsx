import React from 'react';

const TaxPlanningWidget = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Tax Planning</h2>
      <div className="space-y-2">
        <p>Plan your taxes efficiently to save more.</p>
        <ul className="list-disc list-inside">
          <li>Utilize all available deductions</li>
          <li>Invest in tax-saving instruments</li>
          <li>Keep track of your expenses</li>
        </ul>
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Learn More
      </button>
    </div>
  );
};

export default TaxPlanningWidget;