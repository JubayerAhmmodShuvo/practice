// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAge6TAM2WQiZOW725x1k7sEECsVzk8XAw",
  authDomain: "simple-firebase-auth-bb15b.firebaseapp.com",
  projectId: "simple-firebase-auth-bb15b",
  storageBucket: "simple-firebase-auth-bb15b.appspot.com",
  messagingSenderId: "431398812769",
  appId: "1:431398812769:web:d50d5160e0175ba5b4be20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;