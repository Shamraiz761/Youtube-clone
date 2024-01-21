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
    <div className="text-gray-800 bg-white w-64 flex flex-col h-screen">
      {/* Logo */}
    

      {/* Navigation Links */}
      <div className="flex-grow">
        <ul className="space-y-2">
          <li className="p-4 hover:bg-gray-200  cursor-pointer flex items-center ">
           <Home className='mr-3'/> Home
          </li>
          <li className="p-4 hover:bg-gray-200  cursor-pointer flex items-center ">
           <TrendingUpIcon className='mr-3'/> Trending
          </li>
          <li className="p-4 hover:bg-gray-200  cursor-pointer flex items-center ">
           <SubscriptionsIcon className='mr-3'/> Subscriptions
          </li>
          <li className="p-4 hover:bg-gray-200  cursor-pointer flex items-center ">
           <LibraryBooksIcon className='mr-3'/> Library
          </li>
          <li className="p-4 hover:bg-gray-200  cursor-pointer flex items-center ">
           <History className='mr-3'/> History
          </li>
          <li className="p-4 hover:bg-gray-200  cursor-pointer flex items-center ">
           <VideoLibraryIcon className='mr-3'/> Your Videos
          </li>
          <li className="p-4 hover:bg-gray-200  cursor-pointer flex items-center ">
           <WatchLaterIcon className='mr-3'/> Watch Later
          </li>
          <li className="p-4 hover:bg-gray-200  cursor-pointer flex items-center ">
           <ThumbUpIcon className='mr-3'/> Liked Videos
          </li>
          <li className="p-4 hover:bg-gray-200  cursor-pointer flex items-center ">
           <ArrowDropDownIcon className='mr-3'/> Show more
          </li>


        </ul>
      </div>

    
    </div>
  );
};

export default Sidebar;
