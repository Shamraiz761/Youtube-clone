import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import History from '@material-ui/icons/History';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import Home from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import React from 'react';

const Sidebar = () => {
 
  return (
    <div className="text-gray-800 bg-white w-64 flex flex-col h-[89vh]">
     
      <div className="flex-grow">
        <ul className="space-y-2 overflow-auto ">
            {
                data.map((item) => (
                   
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
