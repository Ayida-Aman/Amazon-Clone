// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiGnGbkqjZu4blPzM0oEM3qXs2mq44XPY",
  authDomain: "clone-19bf2.firebaseapp.com",
  projectId: "clone-19bf2",
  storageBucket: "clone-19bf2.firebasestorage.app",
  messagingSenderId: "904707104367",
  appId: "1:904707104367:web:a6465acfcf0e8b3c43379a"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore() 