import React from 'react'
import { useState } from 'react';
import Profile from './Profile';
import Logo from './Logo';

const Navbar = () => {
    const [isActive, setActive] = useState(false);
    console.log(isActive);
    const handleToggle = () => {
      setActive ( !isActive); 
    }
  
  return (
    <div className="flex items-center justify-center fixed mt-3 w-screen">
      <div className="w-[95%] h-12 py-2 px-4 bg-[#c5baff] rounded-lg flex items-center justify-between ">
        <div
          className={`tham tham-e-squeeze tham-w-6 ${
            isActive ? "tham-active" : ""
          }`}
          onClick={handleToggle}
        >
          <div className="tham-box">
            <div className="tham-inner" />
          </div>
        </div>
        <Logo />
        <Profile />
      </div>
    </div>
  );
}

export default Navbar