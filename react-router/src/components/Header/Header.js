
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <div>
      <h1>Welcome to my fancy routing website</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/friends">Friend</Link> 
        <Link to="/about">About </Link>
        <Link to="/post">Post</Link>
      </nav>


    </div>
  );
};

export default Header;