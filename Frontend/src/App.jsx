import React from 'react'
import {
  BrowserRouter as Router, Routes, Route, Link,Navigate
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage';
import InternManagement from './pages/InternManagement';

const App = () => {

  return (
    <main className="">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/Intern Management" element={<InternManagement />} />
                
                </Routes>
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App
