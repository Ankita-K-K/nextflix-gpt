import { useEffect } from "react"
import { OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () =>{
    const dispatch = useDispatch();
    const upcomingMovies = useSelector((store)=>store.movies.upcomingMovies);
    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
        console.log("Top rated" + json.results);
    }

    useEffect(() =>{
        !upcomingMovies && getUpcomingMovies();
    },[])
}

export default useUpcomingMovies;