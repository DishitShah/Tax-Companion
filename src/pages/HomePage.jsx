import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Tax Companion</h1>
      <p className="text-lg mb-8">Your one-stop solution for managing taxes efficiently.</p>
      <Link to="/dashboard">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
          Start Your Journey with Us
        </button>
      </Link>
      <p className="text-md mt-4 text-gray-600">
        Smart people choose smart solutions to save time and effort.
      </p>
    </div>
  );
}

export default HomePage;