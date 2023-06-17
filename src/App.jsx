import './App.css'
import{ BrowserRouter, Routes, Route} from 'react-router-dom';

//pages
import Home from './pages/Home';
import Navbar from './components/Navbar';
import NewPost from './pages/Newposts';
function App() {

  return (
    <div className='app'>
      <div className='container'>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/New' element={<NewPost />} />
        </Routes>
        </BrowserRouter>
        </div>
    </div>
  );
}

export default App
