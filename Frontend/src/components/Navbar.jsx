import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import {
  HomeIcon,CogIcon,CalendarDaysIcon,BanknotesIcon,UsersIcon,BuildingStorefrontIcon
} from "@heroicons/react/24/outline";
// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

// nav list menu
const navListMenuItemsMap = {
  Operations: [
    {
      title: "Attendance Register",
    },
    { title: "Time Sheet" },

    ,
    { title: "Expence Claim" },
    ,
    { title: "Assigned Tasks" },
    ,
    { title: "Mail" },
    ,

  ],
  Supervision: [
    {
      title: "Monitor Teams",
      description: "Track progress and performance of teams.",
    },
    {
      title: "Schedule Meetings",
      description: "Organize and manage meetings.",
    },
  ],
  "Finance Administration": [
    { title: "Budgets", description: "Manage budgets and expenses." },
    { title: "Invoices", description: "Track and approve invoices." },
  ],
  HR: [
    {
      title: "Employee Directory",
      description: "Access and update employee details.",
    },
    { title: "Payroll", description: "View and process payrolls." },
  ],
  Infra: [
    { title: "Inventory", description: "Track assets and inventories." },
    { title: "Maintenance", description: "Schedule maintenance activities." },
  ],
};

// NavListMenu component
function NavListMenu(props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { name, icon, menuItems } = props;

  const renderItems = menuItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <div className="font-bold p-1 text-blue-gray-900  ">{title}</div>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center  font-light text-blue-gray-900 lg:flex lg:rounded-full">
              {React.createElement(icon, { className: "h-[18px] w-[18px]" })}
              {name}
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[16rem]  gap-3 overflow-visible lg:grid">
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
    </React.Fragment>
  );
}


// nav list component
// NavList component
const navListItems = [
 
  { label: "Operations", icon: CogIcon },
  { label: "Supervision", icon: CalendarDaysIcon },
  { label: "Finance Administration", icon: BanknotesIcon },
  { label: "HR", icon: UsersIcon },
  { label: "Infra", icon: BuildingStorefrontIcon },
];

function NavList() {
  return (
    <ul className="mt-2 mb-4 w-[100%] flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <Typography
        key="Home"
        as="a"
        href="#"
        variant="small"
        color="gray"
        className="font-medium text-gray-900"
      >
        <MenuItem className="flex items-center gap-2 lg:rounded-full">
          {React.createElement(HomeIcon, { className: "h-[18px] w-[18px]" })}{" "}
          <span className="text-gray-900"> Home</span>
        </MenuItem>
      </Typography>
      {navListItems.map(({ label, icon }, key) => (
        <NavListMenu
          key={key}
          name={label}
          icon={icon}
          menuItems={navListMenuItemsMap[label] || []} // Pass the correct menu items
          className="font-medium text-gray-900"
        />
      ))}
    </ul>
  );
}
 
export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
 
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);
 
  return (
    <Navbar className="  mx-auto w-[100%] p-2 rounded-full pl-6 bg-[#c5baff] mt-2  ">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          Team Manager
        </Typography>
        <div className="">
          <NavList />
        </div>

        {/* <Button size="sm" variant="text">
          <span>Log In</span>
        </Button> */}
        <ProfileMenu />
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}