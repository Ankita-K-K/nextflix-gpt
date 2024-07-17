// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK2ivtswm85E8FH9jB2ggnitpFxDiruQo",
  authDomain: "netflixgpt-70d75.firebaseapp.com",
  projectId: "netflixgpt-70d75",
  storageBucket: "netflixgpt-70d75.appspot.com",
  messagingSenderId: "529788311390",
  appId: "1:529788311390:web:92667f30591b955ff421cf",
  measurementId: "G-HSLZQ7CBYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();