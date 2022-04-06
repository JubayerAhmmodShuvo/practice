
import './App.css';
import { getAuth } from "firebase/auth";
import app from './firebase.init';

const auth= getAuth(app);
function App() {
  return (
    <div className="App">

      <form >
        <input type="text" />
        <br />
        
        <input type="password" placeholder="pass" />
      </form>


      
    </div>
  );
}

export default App;
