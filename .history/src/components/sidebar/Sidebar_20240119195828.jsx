import React from 'react';

const Sidebar = () => {
  return (
    <div className="text-gray-800 text-white w-64 flex flex-col h-screen">
      {/* Logo */}
      <div className="p-4 text-2xl font-bold">
        <span className="text-red-500">You</span>
        <span className="text-white">Tube</span>
      </div>

      {/* Navigation Links */}
      <div className="flex-grow">
        <ul className="space-y-4">
          <li className="p-4 hover:bg-gray-700 cursor-pointer">
            Home
          </li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">
            Trending
          </li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">
            Subscriptions
          </li>
        </ul>
      </div>

      {/* Additional Links */}
      <div className="p-4">
        <ul className="space-y-4">
          <li className="flex items-center space-x-2 cursor-pointer">
            <span className="material-icons">history</span>
            <span>History</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer">
            <span className="material-icons">slideshow</span>
            <span>Your videos</span>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
