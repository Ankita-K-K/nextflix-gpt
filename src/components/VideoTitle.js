import React from 'react'

const VideoTitle = ({movie}) => {
  const {original_title, overview} = movie;
  return (
    <div className='w-screen aspect-video pt-[13%] px-24 absolute text-white bg-gradient-to-r from-black z-10 scrollbar-hide mb-4 scarollBar-thin scrollbar-webkit'>
      <h1 className='text-5xl font-bold mb-4'>{original_title}</h1>
      <p className='w-1/4 line-clamp-3 mb-3'>{overview}</p>
      <div className='flex gap-4 mt-4'>
        <button className='bg-white text-black px-8 py-2 font-semibold rounded-lg text-lg hover:bg-opacity-90'>Play</button>
        <button className='bg-zinc-500 bg-opacity-40 text-white px-8 rounded-lg text-lg py-2 hover:bg-opacity-30'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
