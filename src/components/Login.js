import React from 'react'
import Header from './Header'
import {useState} from 'react';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img className='h-screen w-screen' src='https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg' alt="body-img" />
      </div>
      <from className='w-3/12 px-12 py-8 bg-black absolute mt-24 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80 z-20'>
        <h1 className='font-bold text-3xl py-4 text-zinc-200'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder="Full Name" className='p-2 my-2 w-full bg-zinc-700'/>}
        <input type="email" placeholder="email" className='p-2 my-2 w-full bg-zinc-700'/>
        <input type='password' placeholder='password' className='p-2 my-2 w-full bg-zinc-700'/>
        <button className="py-2 my-4 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-2 text-zinc-400'>{isSignInForm ? "New to NetFlix? " : "Already a User?"} <span className='text-white cursor-pointer hover:border-b border-white' onClick={toggleSignInForm}>{isSignInForm ? "Sign Up Now" : "Sign In"}</span></p>
      </from>
    </div>
  )
}

export default Login
