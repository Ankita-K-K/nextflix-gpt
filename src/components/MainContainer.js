import React from 'react'
import VideoTitle from './VideoTitle';
import VideoBG from './VideoBG';
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    if(!movies) return;  //early return
    const mainMovie = movies[0];
    console.log(mainMovie);
  return (
    <div className='scrollbar-hide scarollBar-thin scrollbar-webkit'>
      <VideoTitle movie={mainMovie}/>
      <VideoBG movieId={mainMovie.id}/>    
    </div>
  )
}

export default MainContainer
