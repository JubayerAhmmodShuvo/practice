import { useEffect, useState } from "react"

const useToken = user => {
  const [token, setToken] = useState(' ');
  useEffect(() => { 
    const email = user?.user?.email;
    const currentEmail = { email: email };
    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentEmail),
      })
        .then((res) => res.json())
        .then((data) => { 
          
        })
    }

  }, [user]);
  return [token, setToken];
}

export default useToken;