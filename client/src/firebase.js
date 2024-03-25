// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-blog-74ab0.firebaseapp.com',
  projectId: 'mern-blog-74ab0',
  storageBucket: 'mern-blog-74ab0.appspot.com',
  messagingSenderId: '224766809555',
  appId: '1:224766809555:web:2153997e487cffaf640b26',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
