import React from 'react'
import {
  BrowserRouter as Router, Routes, Route, Link,Navigate
} from 'react-router-dom';
import Signin from './pages/Signin';
import Navbar from './components/Navbar/Navbar';
import SideBar from './components/SideBar';
import { useState } from 'react';

const App = () => {
   const [isSidebarVisible, setSidebarVisible] = useState(false);
  
    // Function to toggle the sidebar
    const toggleSidebar = () => {
      setSidebarVisible((prevState) => !prevState);
    };
  return (
    <main className=''>
      <Router>
        <Navbar toggleSidebar={toggleSidebar} />
        <SideBar isSidebarVisible={isSidebarVisible} />
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route path="/" element={<Signin />} />
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
