// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYhFPefkPDMoqRebl1c55lL1DPG3pO1wg",
  authDomain: "email-password-auth-f9e6c.firebaseapp.com",
  projectId: "email-password-auth-f9e6c",
  storageBucket: "email-password-auth-f9e6c.appspot.com",
  messagingSenderId: "607841330885",
  appId: "1:607841330885:web:9d6c0a25bdcf770db972ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;