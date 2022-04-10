import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';

import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => { 
    auth.signOut();
  }
  return (
    <div>
      <nav className="header">
        <img src={logo} alt="" />
        <div>
          <Link to="/shop">Shop</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/about">About</Link>
          {
            user ?
              <button style={{margin:'3px'}} onClick={handleSignOut} >SignOut</button>:
            <Link to="/login">Login</Link>}
        </div>
    </nav>
      

    </div>
  );
};

export default Header;