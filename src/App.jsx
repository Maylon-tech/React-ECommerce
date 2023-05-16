
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home/Home';
import Navbar from './components/Header/Navbar'

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home /> } />
      </Routes>
      
    </Router>
  )
}

export default App;
