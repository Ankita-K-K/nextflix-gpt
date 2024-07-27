import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { OPTIONS } from '../utils/constants'
import { addGptMovieResult } from '../utils/gptSlice'

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const selectedLanguage = useSelector((store)=>store.lang.lang);
    console.log(selectedLanguage);
    const searchText = useRef(null);
  const searchMovieTMDB = async (movie) =>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie + '&include_adult=false&page=1', OPTIONS);
    const json = await data.json();
    return json.results;
  }

const handleSearchClick = async () =>{
    console.log(searchText.current.value);
    //make an api call to openai get movie results
    const gptQuery = "Act as a movie recomandation system and suggest some movies for the query" + searchText.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Tare Zameen Par, Chichore, 3-idiots, Golmaal, Koi Mil Gaya"
    const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
      const gptMovies = gptResults.choices[0]?.message?.content.split(", ");
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmbdResults = await Promise.all(promiseArray);
      dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmbdResults}));

}


  return (
    <div className='w-screen h-screen bg-gradient-to-b from-zinc-950'>
    <div className='pt-[13%] flex justify-center'>
      <form className='bg-black w-1/2 grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
        <input type='text' ref={searchText} className='p-2 text-white m-4 col-span-9 outline-none bg-zinc-800' placeholder={lang[selectedLanguage].gptSearchPH}/>
        <button className='px-4 py-1 font-semibold bg-red-500 rounded-sm text-white col-span-3 m-4' onClick={handleSearchClick}>{lang[selectedLanguage].search}</button>
      </form>
    </div>
    </div>
  )
}

export default GptSearchBar
