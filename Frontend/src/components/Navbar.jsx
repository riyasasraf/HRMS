import React from 'react'
import Profile from './Profile';

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-center fixed top-1">
      <div className="w-[90%] mt-2 h-14 flex items-center justify-between bg-[#f1ecdd] rounded-full">
        <h1 className="font-medium text-4xl text-gray-800 flex-grow text-center">
          Team Manager
        </h1>
        <div className="ml-auto px-10">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default Navbar