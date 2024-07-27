import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import { useSelector } from 'react-redux';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
  const movieId = useSelector((store)=>store.movies.nowPlayingMovies);
  console.log(movieId);
  return (
    <div>
      <Header logState={false}/>
      {
        showGptSearch === true ? <GptSearch /> : <><MainContainer />
        <SecondaryContainer /></>
      }
    </div>
  )
}

export default Browse
