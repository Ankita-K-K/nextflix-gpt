import React from 'react'
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';

const HeaderBrowse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () =>{
    dispatch(removeUser);
    navigate("/");
  }
  return (
    <div className='absolute  py-1 z-10 w-screen bg-black flex justify-between items-center px-32'>
      <img className='w-28' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix-logo"/>
      <button type='button' className='bg-red-600 text-white px-2 py-1 rounded-sm' onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}

export default HeaderBrowse;