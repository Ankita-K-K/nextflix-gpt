import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black scarollBar-thin scrollbar-webkit">
        <div className="mt-0 md:-mt-72 pl-4 md:pl-12 relative z-20">
          <Movielist title={"Now Playing"} movie={movies.nowPlayingMovies} />
          <Movielist title={"Top Rated"} movie={movies.topRatedMovies} />
          <Movielist title={"Popular"} movie={movies.popularMovies} />
          <Movielist
            title={"Upcoming Movies"}
            movie={movies.upcomingMovies}
          />
          <Movielist title={"Horror"} movie={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer
