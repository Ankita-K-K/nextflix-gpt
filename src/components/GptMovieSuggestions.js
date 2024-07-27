import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist';
const GptMovieSuggestions = () => {
  const {movieNames, movieResults} = useSelector((store)=>store.gpt);
  if(!movieNames) return null;
  return (
    <div className='px-auto py-4 my-4 absolute top-72 left-7 text-white  mx-auto w-screen'>
      <div>
        <div className='overflow-x-scroll scrollbar-hide overflow-hidden w-[93%] bg-opacity-90 bg-black p-2'>{
            movieNames.map((movie, index)=><Movielist key={movie} title={movie} movie={movieResults[index]} />)
          }
          </div>
      </div>
    </div>
  )
}

export default GptMovieSuggestions
