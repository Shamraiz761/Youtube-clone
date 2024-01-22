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
    <div className="flex ">
      <img src={image} alt="" className="rounded-sm " />

      <div className="flex flex-col ml-5">
        <h4 className="text-sm font-bold text-gray-800">{title}</h4>
        <p className="text-xs font-medium text-gray-600">{channel}</p>
        <p className="text-xs font-medium text-gray-600">
          {views} • {timestamp}
        </p>
        <div className="flex ">
          <p className="bg-gray-200 p-">Subscribers</p>
          <span className="ml-3">{subscribers}</span>
        </div>
      </div>
    </div>
  );
}

export default FilteredVideos;
