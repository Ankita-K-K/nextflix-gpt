import React from 'react'
import { IMG_CDN } from '../utils/constants';

const MovieCard = ({posterPath, title}) => {
  if(!posterPath) return null
  return (
    <div className='w-36 md:w-48 pr-4 mt-2 text-center'>
      <img alt='movie poster' src={IMG_CDN + posterPath} className='h-52 w-36' />
      <p className='text-center text-white w-48 line-clamp-2 mb-1 px-auto mx-auto'>{title}</p>
    </div>
  )
}

export default MovieCard
