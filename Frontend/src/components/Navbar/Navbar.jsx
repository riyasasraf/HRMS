import React, { useState } from "react";
import Profile from "./Profile";
import Logo from "./Logo";
import SideBar from "../SideBar";

const Navbar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

 const toggleSidebar = () => setSidebarVisible((prev) => !prev);

  return (
    <>
      <div className=" fixed top-0 left-0  w-screen">
        <div className="w-screen h-12 py-2 px-4 bg-indigo-400  flex items-center justify-between">
  
            <div className="">
              <div className="" />
            </div>
        

          <Logo />
          <Profile />
        </div>
      </div>
      <SideBar  />
    </>
  );
};

export default Navbar;
