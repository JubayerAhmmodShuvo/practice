
import './App.css';
import {Route, Routes} from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetail from './Pages/Home/Services/ServiceDetail';

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route path="/about" element={<About></About>} ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
