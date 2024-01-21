import React from 'react'

function VideoCard({image , title , channel , views , timestamp , channelImage}) {
  return (
    <div>
      <img src={image} alt="" />
      <img src={channelImage} className=''/>
      <div className='flex flex-col'>
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>{views} • {timestamp}</p>
      </div>
    </div>
  )
}

export default VideoCard