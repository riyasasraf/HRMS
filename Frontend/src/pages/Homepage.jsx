import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/SideBar";
import Signin from "../components/Signin";

const Homepage = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setSidebarVisible((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <Navbar toggleSidebar={toggleSidebar} />
      <SideBar isSidebarVisible={isSidebarVisible} />
      <Signin/>
    </div>
  );
};

export default Homepage;
