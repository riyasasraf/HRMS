import React from 'react'
import {
  BrowserRouter as Router, Routes, Route, Link,Navigate
} from 'react-router-dom';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
    </Router>
  );
}

export default App
