// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp_YeFROaJ-VeOCWtNSJ80m6bgmU8RiG0",
  authDomain: "music-app-demo-7da7c.firebaseapp.com",
  projectId: "music-app-demo-7da7c",
  storageBucket: "music-app-demo-7da7c.firebasestorage.app",
  messagingSenderId: "368136137636",
  appId: "1:368136137636:web:6c57b60b137e18cce26f31",
  measurementId: " G-TLJYX9LWHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);