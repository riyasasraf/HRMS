import React from "react";

// Icon Components
const DashboardIcon = () => (
  <svg
    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M3 13h8V3H3v10zm10 8h8v-6h-8v6zm-10 0h8v-4H3v4zm10-8h8V3h-8v10z" />
  </svg>
);

const HRIcon = () => (
  <svg
    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M13 2v10h9l-9 9V11H3l9-9z" />
  </svg>
);

const LogoutIcon = () => (
  <svg
    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M13 2v10h9l-9 9V11H3l9-9z" />
  </svg>
);

// Menu Data
const menuItems = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    subMenu: [],
  },
  {
    name: "Operations",
    icon: <HRIcon />,
    subMenu: [],
  },
  {
    name: "HR Department",
    icon: <HRIcon />,
    subMenu: ["Intern Management","Employee Hiring"],
  },
  {
    name: "Supervisory",
    icon: <HRIcon />,
    subMenu: [],
  },
  {
    name: "Asset Management",
    icon: <HRIcon />,
    subMenu: [],
  },
  {
    name: "Finance Administration",
    icon: <LogoutIcon />,
    subMenu: [],
  },
  {
    name: "Auditing",
    icon: <HRIcon />,
    subMenu: [],
  },

];

export default menuItems;
