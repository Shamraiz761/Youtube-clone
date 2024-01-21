import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-red-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl">
         
        </div>

        {/* Search bar */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-l-md focus:outline-none"
          />
          <button className="bg-gray-700 px-4 py-2 rounded-r-md text-white">
            Search
          </button>
        </div>

        {/* Navigation links */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Trending
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Subscriptions
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Library
          </a>
        </div>

        {/* User profile */}
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-gray-300">Sign In</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
