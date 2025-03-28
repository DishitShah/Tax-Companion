import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-900 text-white flex flex-col h-screen">
      <div className="flex flex-col p-4">
        <NavLink to="/dashboard" activeClassName="bg-yellow-500" className="p-2 my-2 rounded">Dashboard</NavLink>
        <NavLink to="/documents" activeClassName="bg-yellow-500" className="p-2 my-2 rounded">Documents</NavLink>
        <NavLink to="/learning" activeClassName="bg-yellow-500" className="p-2 my-2 rounded">Learning</NavLink>
        <NavLink to="/filing" activeClassName="bg-yellow-500" className="p-2 my-2 rounded">Filing</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;