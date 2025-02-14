// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-FAoV5VeU5aO0OcRVXdBeR1A3Xdhuufg",
  authDomain: "dragon-news-76596.firebaseapp.com",
  projectId: "dragon-news-76596",
  storageBucket: "dragon-news-76596.firebasestorage.app",
  messagingSenderId: "512230401732",
  appId: "1:512230401732:web:cedbd740d247cd6243cb91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;