import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux';

const Movielist = ({title, movie}) => {
    const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
    console.log(movie);
    return (
      <div className="px-6">
        <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
        <div className="flex overflow-x-scroll scrollbar-hide">
          <div className="flex">
            {movie?.map((mov) => (
              <MovieCard key={mov.id} posterPath={mov.poster_path} title={mov.original_title} />
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Movielist
