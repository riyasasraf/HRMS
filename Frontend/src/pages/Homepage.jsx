import React from 'react'
import Navbar from '../components/Navbar'
import Signup  from './Signup';

const Homepage = () => {
  return (
    <div className="overflow-hidden h-screen">
      <Navbar />
      <Signup />
    </div>
  );
}

export default Homepage