
import './App.css';
import app from './firebase.init';
import { getAuth,GithubAuthProvider, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { useState } from 'react';

const auth  =getAuth(app);
function App() {
  const [user, setUser] = useState({});

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => { 
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        //console.log(user);
      
      })
      .catch(error => { 
        console.log(error);
      })

  }
  const handleGithubSignIn = () => { 
    signInWithPopup(auth, githubProvider)
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
        user.email ? <button onClick={handleGoogleSignOut} >SignOUt</button> : <div>
          <button onClick={handleGoogleSignIn} >Google sign In</button>
          <button onClick={handleGithubSignIn} >Github Sign in</button>
        </div>
        
      }
      
     
      <h2>Name: {user.displayName}</h2>
      <p>I know your email: {user.email}</p>
      <img src={ user.photoURL} alt="" />
    </div>
  );
}

export default App;
