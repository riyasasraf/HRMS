import React from 'react'
import Signup from './pages/signup'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow flex justify-center items-center bg-gray-100">
        <Signup />
      </div>
    </div>
  );
}

export default App
