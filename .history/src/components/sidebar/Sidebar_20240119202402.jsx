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
    const data = [
        {
            id: 1,
            title: 'Home',
            icon: <Home className='mr-3'/>,
        },
        {
            id: 2,
            title: 'Trending',
            icon: <TrendingUpIcon className='mr-3'/>,
        },
        {
            id: 3,
            title: 'Subscriptions',
            icon: <SubscriptionsIcon className='mr-3'/>,
        },
        {
            id: 4,
            title: 'Library',
            icon: <LibraryBooksIcon className='mr-3'/>,
        },
        {
            id: 5,
            title: 'History',
            icon: <History className='mr-3'/>,
        },
        {
            id: 6,
            title: 'Your Videos',
            icon: <VideoLibraryIcon className='mr-3'/>,
        },
        {
            id: 7,
            title: 'Watch Later',
            icon: <WatchLaterIcon />,
        },
        {
            id: 8,
            title: 'Liked Videos',
            icon: <ThumbUpIcon className=''/>,
        },
        {
            id: 9,
            title: 'Show more',
            icon: <ArrowDropDownIcon />,
        },
    ]
  return (
    <div className="text-gray-800 bg-white w-64 flex flex-col h-[89vh]">
      {/* Logo */}
    

      {/* Navigation Links */}
      <div className="flex-grow">
        <ul className="space-y-2 ">
            {
                data.map((item) => (
                   
                        <li className="pl-8 py-3 hover:bg-gray-200  cursor-pointer flex items-center text-sm font-medium">
                            {item.icon}
                            {item.title}
                        </li>
                   
                ))
            }
          <li className="pl-8 py-3 hover:bg-gray-200  cursor-pointer flex items-center text-sm font-medium">
           <Home className='mr-3'/> Home
          </li>
          <li className="pl-8 py-3 hover:bg-gray-200  cursor-pointer flex items-center text-sm font-medium">
           <TrendingUpIcon className='mr-3'/> Trending
          </li>
          <li className="pl-8 py-3 hover:bg-gray-200  cursor-pointer flex items-center text-sm font-medium">
           <SubscriptionsIcon className='mr-3'/> Subscriptions
          </li>
          <li className="pl-8 py-3 hover:bg-gray-200  cursor-pointer flex items-center text-sm font-medium">
           <LibraryBooksIcon className='mr-3'/> Library
          </li>
          <li className="pl-8 py-3 hover:bg-gray-200  cursor-pointer flex items-center text-sm font-medium">
           <History className='mr-3'/> History
          </li>
          <li className="pl-8 py-3 hover:bg-gray-200  cursor-pointer flex items-center text-sm font-medium">
           <VideoLibraryIcon className='mr-3'/> Your Videos
          </li>
          <li className="pl-8 py-3 hover:bg-gray-200  cursor-pointer flex items-center text-sm font-medium">
           <WatchLaterIcon className='mr-3'/> Watch Later
          </li>
          <li className="pl-8 py-3 hover:bg-gray-200  cursor-pointer flex items-center text-sm font-medium">
           <ThumbUpIcon className='mr-3'/> Liked Videos
          </li>
          <li className="pl-8 py-3 hover:bg-gray-200  cursor-pointer flex items-center text-sm font-medium">
           <ArrowDropDownIcon className='mr-3'/> Show more
          </li>


        </ul>
      </div>

    
    </div>
  );
};

export default Sidebar;
