import React from "react";
import InternsList from "../components/Intern Management/InternsList";

const InternManagement = ({ isSidebarOpen }) => {
  console.log(isSidebarOpen)
  return (
    <div className="mt-12 ml-64">
      <InternsList/>
    </div>
  );
};

export default InternManagement;
