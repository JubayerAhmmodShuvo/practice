
import { Route, Routes } from 'react-router';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
    
      <Header />

      <Routes>
        <Route path='/' element={<Shop></Shop>} ></Route>  
        <Route path='/shop' element={<Shop></Shop>} ></Route>
        <Route path='/orders' element={<Orders />}></Route>
        <Route path='/inventory' element={<Inventory />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
