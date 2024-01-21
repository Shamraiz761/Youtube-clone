import { ArrowDownward, Home, LibraryAdd, Subscriptions, ThumbUp, TrendingDown, VideoLibrary,  WatchLater } from '@material-ui/icons';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import History from '@material-ui/icons/History';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
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
           <TrendingUpIcon /> Trending
          </li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
           <Subscriptions /> Subscriptions
          </li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
           <LibraryAdd className='mr-3'/> Library
          </li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
           <History /> History
          </li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
           <VideoLibrary /> Your Videos
          </li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
           <WatchLater className='mr-3'/> Watch Later
          </li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
           <ThumbUp /> Liked Videos
          </li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
           <ArrowDownward /> Show more
          </li>


        </ul>
      </div>

    
    </div>
  );
};

export default Sidebar;
