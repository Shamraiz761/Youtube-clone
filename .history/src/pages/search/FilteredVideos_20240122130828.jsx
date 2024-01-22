import React from "react";

function FilteredVideos({
  image,
  title,
  channel,
  views,
  timestamp,
  subscribers,
}) {
  return (
    <div className="flex flex-wrap">
      <img src={image} alt="" className="rounded-sm " />

      <div className="flex flex-col mx-5 ">
        <h4 className="text-sm font-bold text-gray-800 mt-1">{title}</h4>
        <p className="text-xs font-medium text-gray-600 mt-1">{channel}</p>
        <p className="text-xs font-medium text-gray-600 mt-1">
          {views} • {timestamp}
        </p>
        <div className="flex text-sm my-2">
          <p className="bg-gray-200 p-1 text-gray-700">Subscribers</p>
          <span className="ml-3 text-gray-700">{subscribers}</span>
        </div>
      </div>
    </div>
  );
}

export default FilteredVideos;
