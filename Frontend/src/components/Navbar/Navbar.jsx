import React, { useState } from "react";
import Profile from "./Profile";
import Logo from "./Logo";

const Navbar = ({ toggleSidebar }) => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
    toggleSidebar(); // Call the function to toggle the sidebar
  };

  return (
    <div className="flex items-center justify-center fixed  w-screen">
      <div className="w-screen h-12 py-2 px-4 bg-indigo-400  flex items-center justify-between">
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
};

export default Navbar;
