import React from 'react'
import VideoComponent from './VideoCard'

function RecommendedVideo() {
  return (
    <div className='m-5 '>
      <h1 className='text-lg font-semibold text-gray-800'> Recommended</h1>
      <div className='grid grid-cols-1  md:grid-cols-4 gap-4 my-5'>
<VideoComponent />
      </div>
    </div>
  )
}

export default RecommendedVideo