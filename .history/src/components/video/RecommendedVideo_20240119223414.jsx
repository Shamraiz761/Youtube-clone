import React from "react";
import VideoCard from "./VideoCard";

function RecommendedVideo() {
  return (
    <div className="m-5 ">
      <h1 className="text-lg font-bold text-gray-800"> Recommended</h1>
      <div className="grid grid-cols-1  md:grid-cols-4 gap-4 my-5">
        <VideoCard
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8i5NvGnbqT6WIPnUUhMb8bwUM0vwdj2QUNS4aQpBf5g&s"
          }
          
        />
      </div>
    </div>
  );
}

export default RecommendedVideo;