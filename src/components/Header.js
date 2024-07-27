import React from 'react'
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import {addUser} from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { LOGO_URL } from '../utils/constants';
import { toggleGptSearchView, clearMovies } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/languageConstants';
import { changeLanguge } from '../utils/configSlice';
import { useSelector } from 'react-redux';
const Header = ({logState}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      if(user){
        const {uid, email, displayName} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName}));
        navigate("/browse");
      }else{
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  },[])

  const handleGptClick = () =>{
    dispatch(toggleGptSearchView());
    dispatch(clearMovies());
  }

  const handleSignOut = () =>{
    signOut(auth)
    .then(()=>{})
    .catch(()=>{
      navigate("/error");
    })
  }

  const handleSelectLang = (event) =>{
    dispatch(changeLanguge(event.target.value))
  }

  return (logState === true ? (
    <div className='absolute px-32 py-1 z-10 h-screen w-screen bg-gradient-to-b from-black'>
      <img className='w-48 bg-gradient-to-b from black opacity-80 bg-transparent' src={LOGO_URL} alt="netflix-logo"/>
    </div>

  ):(
    <div className='sticky top-0 z-50'>
     <div className='absolute  py-1 w-screen bg-black flex justify-between items-center px-32 bg-opacity-40'>
      <img className='w-28' src={LOGO_URL} alt="netflix-logo"/>
      
      <div className='flex justify-center gap-4'>
      {showGptSearch && <select className='outline-none bg-zinc-800 text-white m-1' onChange={handleSelectLang}>
        {SUPPORTED_LANGUAGES.map(lang=><option className='outline-none' key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>}
      <button className='bg-red-600 py-1 px-2 rounded-sm text-white font-semibold' onClick={handleGptClick}>{showGptSearch ? "Home" : "GPT search"}</button>
      <button type='button' className='bg-red-600 text-white px-2 py-1 rounded-sm font-semibold' onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
    </div>
  ));
}

export default Header
