import { Home, Subscriptions, TrendingDown } from '@material-ui/icons';
import React from 'react';

const Sidebar = () => {
  return (
    <div className="text-gray-800 bg-white w-64 flex flex-col h-screen">
      {/* Logo */}
    

      {/* Navigation Links */}
      <div className="flex-grow">
        <ul className="space-y-4">
          <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
           <Home className='mr-3'/> Home
          </li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
           <TrendingDown /> Trending
          </li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
           <Subscriptions /> Subscriptions
          </li>

        </ul>
      </div>

    
    </div>
  );
};

export default Sidebar;
