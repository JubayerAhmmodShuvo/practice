// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO0k5qjKNw7mxAqQwOVKMsj6exZqY3pzY",
  authDomain: "genius-car-service-b4f85.firebaseapp.com",
  projectId: "genius-car-service-b4f85",
  storageBucket: "genius-car-service-b4f85.appspot.com",
  messagingSenderId: "939465019226",
  appId: "1:939465019226:web:577bf9667bc4677d6c2d63",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
