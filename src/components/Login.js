import React from 'react'
import Header from './Header'
import {useState} from 'react';
import {useRef} from 'react';
import {validateEmail} from '../utils/validate';
import {validatePassword} from '../utils/validate';
import {validateFullName} from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {auth} from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [isEmailMessage, setIsEmail] = useState(null);
  const [isPasswordMessage, setIsPassword] = useState(null);
  const [isFullnameMessage, setIsFullnameMessage] = useState(null);
  const [isSignIn, setIsSignIn] = useState(null);
  const [isSignUp, setIsSingUp] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const dispatch = useDispatch();

  const handleClick = () => {
    const emailMessage = validateEmail(email.current.value);
    const passwordMessage = validatePassword(password.current.value);
    const fullnameMessage = isSignInForm ? null : validateFullName(fullName.current.value);
  
    setIsEmail(emailMessage);
    setIsPassword(passwordMessage);
    isSignInForm && setIsFullnameMessage(fullnameMessage);
  
    if (emailMessage || passwordMessage) return;
  
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: fullName.current.value
          }).then(() => {
            const {uid, email, displayFullName} = auth.currentUser;
            dispatch(addUser({uid:uid, email:email, displayFullName:displayFullName}));
          }).catch((error) => {
            setIsSignIn(error.message);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMsg = error.message;
          const errmsg = errorCode === "auth/email-already-in-use" ? "Email-Id already in use" : "Someting went wrong! Please try again late"
          !isSignInForm && setIsSingUp(errmsg);
        });
    } else if (isSignInForm) {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if(errorCode === "auth/wrong-password"){
             isSignInForm && isSignInForm && setIsSignIn("Wrong password try again with the correct password")
          }else if(errorCode === "auth/user-not-found"){
             isSignInForm && setIsSignIn("Please check your email-id or you are new here, sign in please")
          }else if(errorCode === "auth/network-request-failed"){
            isSignInForm && setIsSignIn("Network error! Please check your internet connection and try again later")
          }else{
            isSignInForm && setIsSignIn("Oops something went wrong!")
          }
        
        });
    }
  };
  
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div className='bg-gradient-to-b from-black'>
      <Header logState={true}/>
      <div className='relative'>
        <img className='top-0 left-0 absolute h-screen w-screen object-cover opacity-[0.95] z-10' src={BG_URL} alt="body-img" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-[80%] md:w-3/12 md:px-12 py-5 bg-black absolute md:mt-24 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80 z-50 mt-32 px-10'>
        <h1 className='font-bold text-3xl py-4 text-zinc-200'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input ref={fullName} type="text" placeholder="Full Name" className='p-2 my-2 w-full bg-zinc-700'/>}
        {!isSignInForm && <p className='text-red-500 text-right text-sm'>{isFullnameMessage}</p>}
        <input ref={email} type="email" placeholder="email" className='p-2 my-2 w-full bg-zinc-700'/>
        {!isSignInForm && <p className='text-red-500 text-right text-sm'>{isEmailMessage}</p>}
        <input ref={password} type='password' placeholder='password' className='p-2 my-2 w-full bg-zinc-700'/>
        {!isSignInForm && <p className='text-red-500 text-right text-sm'>{isPasswordMessage}</p>}
        <p className='text-red-500 text-center text-sm'>{isSignInForm && isSignIn}</p>
        <p className='text-red-500 text-center text-sm'>{!isSignInForm && isSignUp}</p>
        <button type="button" className="py-2 my-4 bg-red-700 w-full rounded-lg" onClick={handleClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-2 text-zinc-400'>{isSignInForm ? "New to NetFlix? " : "Already a User? "} <span className='text-white cursor-pointer hover:border-b border-white' onClick={toggleSignInForm}>{isSignInForm ? "Sign Up Now" : "Sign In"}</span></p>
      </form>
    </div>
  )
}

export default Login
