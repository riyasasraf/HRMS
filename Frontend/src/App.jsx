import React from 'react'
import Homepage from './pages/Homepage';
import {
  BrowserRouter as Router, Routes, Route, Link,Navigate
} from 'react-router-dom';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
         <Route path="/" element={<Signup/>} />
      </Routes>
    </Router>
  );
}

export default App
