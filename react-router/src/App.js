
import { Route,Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import FriendDetails from './components/FriendDetail/FriendDetails';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Post from './components/Post/Post';
import PostDetail from './components/PostDetail/PostDetail';


function App() {
  return (
    <div className="App">
     <Header />
      <Routes>
      
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/friends" element={<Friends />}></Route>
        <Route path="/friends/:friendId" element={<FriendDetails />}></Route>
        <Route path="/post" element={<Post />}>
          <Route path=':postId' element={<PostDetail />}></Route>

        </Route>
        <Route path="*" element={<NotFound />} ></Route>
      </Routes>

    </div>
  );
}

export default App;
