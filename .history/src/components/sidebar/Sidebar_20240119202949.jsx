
import React from 'react';

import data from './data';
const Sidebar = () => {
 const items = data
  return (
    <div className="text-gray-800 bg-white w-64 flex flex-col h-[89vh]">
     
      <div className="flex-grow">
        <ul className="space-y-2 overflow-auto ">
            {
                items.map((item) => (
                   
                        <li className="pl-8 py-3 hover:bg-gray-200  cursor-pointer flex items-center text-sm font-medium">
                            {item.icon}
                            {item.title}
                        </li>
                   
                ))
            }
      
        </ul>
      </div>

    
    </div>
  );
};

export default Sidebar;
