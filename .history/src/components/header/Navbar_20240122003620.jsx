import React from "react";
import ReorderIcon from "@material-ui/icons/Reorder";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="p-3 sticky top-0 z-96 bg-white">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl flex items-center flex-row">
          <ReorderIcon className="mr-4 size-5 text-gray-700 " />
          <img
            className="w-10 h-4 sm:w-20 sm:h-6"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          />
        </div>

        {/* Search bar */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="p-1 md:px-4 md:py-2 rounded-l-md border border-gray-100 focus:outline-none w-32 md:w-96"
          />
          <Link to={} className="bg-gray-400 p-1  md:px-4 md:py-2 rounded-r-md text-white">
            <SearchIcon />
          </Link>
        </div>

        {/* User profile */}
        <div className="flex items-center flex-row space-x-2 md:space-x-4">
          <VideoCallIcon />
          <AppsIcon />
          <NotificationsActiveIcon />
          <img 
          className="w-10 h-10 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5e22dr8y5uGoiuiPB5wwHR3v8v43srFH0SUokZVWJug&s" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
