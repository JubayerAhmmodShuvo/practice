
import './App.css';
import {Routes,Route} from  'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Products from './components/Products/Products';
import Order from './components/Orders/Order';
import Requireauth from './components/Requireauth/Requireauth';
function App() {
  return (
    <div className="App">
   <Header />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={
         
            <Products />
          
        } />
        <Route path="/orders" element={
          <Requireauth> <Order /></Requireauth>
         
         
          
          
            
         
        } />

  </Routes>
      
    </div>
  );
}

export default App;
