import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Profile from './Pages/Profile';
import Home from './Pages/Home';
import Error from './Pages/error';
import About from './Pages/about';




function App() {
  return (
    
      <Router>
      <nav className='nav'>
      <Link className='page' to="/home"> Home</Link>
      <Link className='page' to="/about"> About</Link>
      <Link className='page' to="/profile"> Custom </Link>
      </nav>
      <style>{'body { background-color: black; }'}</style>
    <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="*" element={<Error />} />
    </Routes>
    </Router>
    
  );
}

export default App;
