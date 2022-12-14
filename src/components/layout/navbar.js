import React, { useState } from "react";
import { BiSearch, BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdHome, MdNotifications, MdAddCircleOutline } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";

export default function Navbar() {
  //handles the side navbar for large and smaller screens
  const [navbar, setNavbar] = useState(false);
  const navMenu = () => {
    setNavbar(!navbar);
  };

  return (
    <header>
      <div className="fixed w-full z-30 h-[60px] bg-green-500 border-b">
        <div className="h-full md:px-[230px] ">
          <div className="md:flex items-center hidden md:px-[20px] h-full">
            <BiSearch className="md:ml-1 absolute" />
            <input
              className="border-solid border rounded px-8 border-green-800 font-semibold"
              type="text"
              placeholder="Search your apps"
            ></input>
          </div>
        </div>
        {/* handles the side nav bar*/}
        <div className="left-0 fixed top-0 md:w-[210px] z-30 w-full h-screen  md:border-r">
          <div
            onClick={navMenu}
            className="flex justify-between w-full items-center px-10 mt-1.5"
          >
            <p className="text-[30px] font-bold font-mono text-blue-900">hub</p>
            <BiMenu size={30} className="md:hidden"></BiMenu>
          </div>
          {/* starts here */}
          <div
            className={
              navbar ? "md:grid grid-cols-1 bg-white/60 pt-4 text-[15px]" : "hidden mt-8 md:grid grid-cols-1"
            }
          >
            
            <div className="pt-2 flex h-full items-center">
              <MdHome size={20} className="text-gray-700 ml-4" />
              <Link onClick={() => setNavbar(false)} className="ml-4" to="/">
                {" "}
                My Apps
              </Link>
            </div>
            <div className="pt-2">
              <Link onClick={() => setNavbar(false)} className="ml-[54px]" to="/">
                Flagship Pioneering
              </Link>
            </div>
            <div className="pt-2">
              <Link onClick={() => setNavbar(false)} className="ml-[54px]" to="/">
                Subscriptions
              </Link>
            </div>
            <div className="pt-2 flex h-full items-center">
              <Link onClick={() => setNavbar(false)} className="ml-[54px]" to="/">
                Add section
              </Link>
              <MdAddCircleOutline className="ml-1" />
            </div>
            <div className="pt-2 flex h-full items-center">
              <MdNotifications size={20} className="text-gray-700 ml-4" />
              <Link onClick={() => setNavbar(false)} className="ml-4" to="/">
                Notifications
              </Link>
            </div>
            <div className="pt-2 flex items-center h-full">
              <CgMenuGridR size={20} className="ml-4" />
              <Link onClick={() => setNavbar(false)} className="ml-4" to="/">
                Add apps
              </Link>
            </div>
          </div>
          <div className="md:bottom-0 left-0 absolute w-full text-[12px] font-bold pb-4">
            <p className="hidden md:flex justify-center">&copy; 2022 hub, inc.</p>
            <Link onClick={() => setNavbar(false)} className="md:flex hidden justify-center" to="/">
              privacy
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
