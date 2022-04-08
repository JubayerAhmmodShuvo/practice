
import './App.css';
import {Routes,Route} from  'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
   <Header />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/login" element={<Login />} />
  </Routes>
      
    </div>
  );
}

export default App;
