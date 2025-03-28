import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="bg-transparent backdrop-blur-lg text-gray-800 px-4 py-2 sticky top-0 shadow-md">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">Tax Companion</Link>
        <div>
          {user ? (
            <>
              <span className="mr-4">Welcome, {user.name}</span>
              <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
            </>
          ) : (
            <>
              <Link to="/auth/login" className="mr-4">Login</Link>
              <Link to="/register" className="bg-yellow-500 px-3 py-1 rounded">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;