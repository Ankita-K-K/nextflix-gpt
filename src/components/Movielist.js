import React from 'react'
import MovieCard from './MovieCard'

const Movielist = ({title, movie}) => {
    console.log(movie);
    return (
      <div className="px-6 scrollbar-hide">
        <h1 className="text-lg md:text-3xl py-4 text-white md:mb-3">{title}</h1>
        <div className="flex overflow-x-scroll scrollbar-hide">
          <div className="flex">
            {movie?.map((mov) => (
              <MovieCard key={mov.id} posterPath={mov.poster_path} title={mov.title || mov.original_title} />
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Movielist
