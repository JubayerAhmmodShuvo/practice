import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AddUser from './components/AddUser/AddUser';
import Home from './components/Home/Home';
import Update from './components/Upadate/Update';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user/add" element={<AddUser />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
