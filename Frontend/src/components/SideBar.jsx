import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const SideBar = ({ isSidebarVisible }) => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  // Data structure for menus
  const menuItems = [
    {
      name: "Dashboard",
      icon: (
        <svg
          className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M3 13h8V3H3v10zm10 8h8v-6h-8v6zm-10 0h8v-4H3v4zm10-8h8V3h-8v10z" />
        </svg>
      ),
      subMenu: [],
    },
    {
      name: "Human Resource",
      icon: (
        <svg
          className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13 2v10h9l-9 9V11H3l9-9z" />
        </svg>
      ),
      subMenu: ["Hiring Process"],
    },
    {
      name: "Sign Out",
      icon: (
        <svg
          className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13 2v10h9l-9 9V11H3l9-9z" />
        </svg>
      ),
      subMenu: [],
    },
  ];

  // Toggle dropdown visibility
  const toggleDropdown = (index) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <aside
      id="default-sidebar"
      className={`fixed top-0 left-0 z-40 w-64 h-screen mt-12 transition-transform ${
        isSidebarVisible ? "translate-x-0" : "-translate-x-full"
      } bg-gray-50 dark:bg-gray-800`}
      aria-label="Sidebar"
    >
      <div className="h-full mb-4 px-3 py-4 overflow-y-auto rounded-r-lg bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {menuItems.map((menu, index) => (
            <li key={index}>
              {menu.subMenu.length > 0 ? (
                <>
                  <button
                    onClick={() => toggleDropdown(index)}
                    type="button"
                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    {menu.icon}
                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                      {menu.name}
                    </span>
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <ul
                    className={`${
                      openDropdowns[index] ? "block" : "hidden"
                    } py-2 space-y-2`}
                  >
                    {menu.subMenu.map((item, subIndex) => (
                      <li key={subIndex}>
                        <div
                          
                          className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          <NavLink
                            to={`/${item}`}
                            className={({ isActive }) =>
                              isActive ? "text-blue-600" : ""
                            }
                          >
                            {item}
                          </NavLink>
                         
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <div
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {menu.icon}
                  <span className="ms-3">
                   
                    <NavLink
                      to={`/${menu.name}`}
                      className={({ isActive }) =>
                        isActive ? "text-blue-600" : ""
                      }
                    >
                      {menu.name}
                    </NavLink>
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
