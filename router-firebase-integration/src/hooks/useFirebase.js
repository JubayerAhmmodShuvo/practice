import { useEffect } from "react";
import { useState } from "react";
import{getAuth,GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import app from "../firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => { 
  const [user, setUser] = useState(false);
  useEffect(() => { 

  }, []);
  const signInWithGoogle = () => { 
    signInWithPopup(auth, googleProvider)
    .then(result => { 
      const user = result.user;
      setUser(user);
    })
  }
  const signOut = () => { 
    auth.signOut()
    .then(() => { 
      setUser(false);
    })
  }
  useEffect(() => { 
    auth.onAuthStateChanged(user => { 
      setUser(user);
    });
  }, []);
  //return [user, setUser];
  return {user,signOut, setUser, signInWithGoogle};

}
export default useFirebase;
