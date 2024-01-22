import React from 'react'

function FilteredVideos({image , title , channel , views , timestamp , channelImage}) {
  return (
    <div className='flex items-center'>
      <img src={image} alt="" className='rounded-sm '/>
      <div>
     
      <div className='flex flex-col '>
        <h4 className='text-sm font-bold text-gray-800'>{title}</h4>
        <p className='text-xs font-medium text-gray-600'>{channel}</p>
        <p className='text-xs font-medium text-gray-600'>{views} • {timestamp}</p>
      </div>
      </div>
    </div>
  )
}

export default FilteredVideos