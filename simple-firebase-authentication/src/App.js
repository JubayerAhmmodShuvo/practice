
import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { useState } from 'react';

const auth  =getAuth(app);
function App() {
  const [user, setUser] = useState({});

  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => { 
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      
      })
      .catch(error => { 
        console.log(error);
      })

  }

  const handleGoogleSignOut = () => { 
    auth.signOut()
      .then(() => {
        setUser({});
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div className="App">
      {
      user.email ?  <button onClick={ handleGoogleSignOut} >SignOUt</button>  : <button onClick={handleGoogleSignIn} >Google sign In</button>
      }
      
     
      <h2>Name: {user.displayName}</h2>
      <p>I know your email: {user.email}</p>
      <img src={ user.photoURL} alt="" />
    </div>
  );
}

export default App;
