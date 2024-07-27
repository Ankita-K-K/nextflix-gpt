import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBG = ({movieId}) => {
  const tarilerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className=" w-screen scarollBar-thin scrollbar-webkit">
      <iframe className="w-screen aspect-video scarollBar-thin scrollbar-webkit" src={"https://www.youtube-nocookie.com/embed/"+tarilerVideo?.key +
          "?&autoplay=1&mute=1&controls=0&loop=1"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
};

export default VideoBG


