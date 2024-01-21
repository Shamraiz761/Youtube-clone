import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-red-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          <img
          className="w-24 h-8" 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" />
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
