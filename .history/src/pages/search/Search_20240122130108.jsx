import React from "react";
import FilteredVideos from "./FilteredVideos";

function Search() {
  return (
    <div className="ml-52">
      <div className="flex items-center ">
        <img
          className="w-24 h-24 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5e22dr8y5uGoiuiPB5wwHR3v8v43srFH0SUokZVWJug&s"
        />
        <div className="ml-5">
            <h4 className="font-semibold text-lg text-gray-800">Shamraiz </h4>
            <p className="text-sm text-gray-500"> 2.3M subscribers</p>
            <p className="text-sm text-gray-500">You can find awesome video lectures on react for great learnig</p>
          
        </div>
      </div>
      <div className="my-5">
      <FilteredVideos
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8i5NvGnbqT6WIPnUUhMb8bwUM0vwdj2QUNS4aQpBf5g&s"
          }
          title={"Become a web developer in 10 minutes"}
          channel={"React with Shamraiz"}
          views={"2.3M"}
          timestamp={"3 days ago"}
        />
      </div>
    </div>
  );
}

export default Search;
