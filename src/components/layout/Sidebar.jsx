import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 h-screen px-4 py-8">
      <nav className="mt-10">
        <Link 
          to="/dashboard" 
          className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-100 bg-gray-700 rounded hover:bg-gray-600"
        >
          Dashboard
        </Link>
        <Link 
          to="/documents" 
          className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-100 rounded hover:bg-gray-600"
        >
          Documents
        </Link>
        <Link 
          to="/learning" 
          className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-100 rounded hover:bg-gray-600"
        >
          Learning
        </Link>
        <Link 
          to="/filing" 
          className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-100 rounded hover:bg-gray-600"
        >
          Tax Filing
        </Link>
        <Link 
          to="/profile" 
          className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-100 rounded hover:bg-gray-600"
        >
          Profile
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;