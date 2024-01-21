import React from "react";
import ReorderIcon from "@material-ui/icons/Reorder";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
const Navbar = () => {
  return (
    <nav className="shad p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl flex items-center flex-row">
          <ReorderIcon className="mr-2 size-5 text-gray-700" />
          <img
            className="w-24 h-8"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          />
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
        <div className="flex items-center flex-row space-x-4">
          <VideoCallIcon />
          <AppsIcon />
          <NotificationsActiveIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
