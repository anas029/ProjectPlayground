// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_GOOGLE_APIKEY,
  authDomain: import.meta.env.VITE_GOOGLE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_GOOGLE_PROJECTID,
  storageBucket: import.meta.env.VITE_GOOGLE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_GOOGLE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_GOOGLE_APPID,
};







// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
