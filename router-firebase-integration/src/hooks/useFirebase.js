import { useEffect } from "react";
import { useState } from "react";

const useFirebase = () => { 
  const [user, setUser] = useState(false);
  useEffect(() => { 

  }, []);
  const signInWithGoogle = () => { 
    console.log("Sign in with Google");
  }
  return [user, setUser];

}
export default useFirebase;
