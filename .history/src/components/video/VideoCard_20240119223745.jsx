import React from 'react'

function VideoCard({image , title , channel , views , timestamp , channelImage}) {
  return (
    <div>
      <img src={image} alt="" />
      <img src={channelImage} className='size-10 rounded-full my-2'/>
      <div className='flex flex-col '>
        <h4 className='text-sm font-bold text-gray-800'>{title}</h4>
        <p className='text-xs font-thin'>{channel}</p>
        <p className='text-xs '>{views} • {timestamp}</p>
      </div>
    </div>
  )
}

export default VideoCard