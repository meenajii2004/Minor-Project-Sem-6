import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../store';
import { Building2, User } from 'lucide-react';

const Navbar = () => {
  const user = useStore((state) => state.user);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Stay Scape</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <Link
                to="/dashboard"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
              >
                <User className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            ) : (
              <Link
                to="/signin"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;