// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXIq8cKrk6cmVQBrNXIMdIWDXY9SavSMw",
  authDomain: "ema-john-simple-8cc8e.firebaseapp.com",
  projectId: "ema-john-simple-8cc8e",
  storageBucket: "ema-john-simple-8cc8e.appspot.com",
  messagingSenderId: "704481858488",
  appId: "1:704481858488:web:932bf11adcc211f02e754d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth ;