import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Bar, Pie } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  ArcElement, // Updated from PieElement to ArcElement
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const DashboardOverview = () => {
  const { user } = useSelector(state => state.auth);
  const [taxData, setTaxData] = useState({
    totalIncome: 0,
    totalTax: 0,
    deductions: 0
  });

  useEffect(() => {
    // Fetch tax data logic would go here
    const fetchTaxData = async () => {
      // Placeholder data
      setTaxData({
        totalIncome: 750000,
        totalTax: 85000,
        deductions: 150000
      });
    };

    fetchTaxData();
  }, []);

  const incomeBreakdownData = {
    labels: ['Salary', 'Investments', 'Other Income'],
    datasets: [{
      data: [500000, 150000, 100000],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)'
      ]
    }]
  };

  const taxLiabilityData = {
    labels: ['Paid Tax', 'Remaining Tax Liability'],
    datasets: [{
      data: [85000, 15000],
      backgroundColor: [
        'rgba(75, 192, 192, 0.6)',
        'rgba(255, 99, 132, 0.6)'
      ]
    }]
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">
        Welcome, {user?.name || 'User'}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Tax Summary Cards */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Financial Overview</h2>
          <div className="space-y-2">
            <p>Total Income: ₹{taxData.totalIncome.toLocaleString()}</p>
            <p>Total Tax Paid: ₹{taxData.totalTax.toLocaleString()}</p>
            <p>Total Deductions: ₹{taxData.deductions.toLocaleString()}</p>
          </div>
        </div>

        {/* Income Breakdown */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Income Breakdown</h2>
          <Pie data={incomeBreakdownData} />
        </div>

        {/* Tax Liability */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Tax Liability</h2>
          <Bar 
            data={taxLiabilityData} 
            options={{
              responsive: true,
              plugins: {
                legend: { display: false }
              }
            }} 
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-4 gap-4">
        <button className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600">
          Tax Calculator
        </button>
        <button className="bg-green-500 text-white p-4 rounded hover:bg-green-600">
          Upload Documents
        </button>
        <button className="bg-purple-500 text-white p-4 rounded hover:bg-purple-600">
          File ITR
        </button>
        <button className="bg-red-500 text-white p-4 rounded hover:bg-red-600">
          Get Help
        </button>
      </div>
    </div>
  );
};

export default DashboardOverview;