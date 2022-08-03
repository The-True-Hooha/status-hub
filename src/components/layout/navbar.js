import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdHome, MdNotifications, MdAddCircleOutline } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";

export default function Navbar() {

  const [navbar, setNavbar] = useState(false)

  const handleSideNav = () => {
    setNavbar(!navbar);
  }
  return (
    <header>
      <div className="fixed w-full h-[60px] bg-white border border-b">
        <div className="h-full md:px-[230px] ">
          <div className="md:flex items-center hidden md:px-[20px] h-full">
            <BiSearch className="md:ml-1 absolute" />
            <input
              className="border-solid border rounded px-8 border-black font-semibold"
              type="text"
              placeholder="Search your apps"
            ></input>
          </div>
        </div>
        {/* handles the side nav bar*/}
        <div className="left-0 fixed top-0 md:w-[210px] w-full h-screen md:border md:border-r">
          <div className="">
            <div className="flex justify-between w-full items-center px-10 mt-1.5">
              <p className="text-[30px] font-bold font-mono text-blue-900">
                hub
              </p>
              <AiOutlineMenu className="md:hidden"></AiOutlineMenu>
            </div>
            <div className="md:grid w-full hidden grid-cols-1 pt-4 text-[15px]">
              <div className="flex h-full items-center">
                <MdHome size={20} className="ml-4 text-gray-700" />
                <Link className="ml-4" to="/">
                  {" "}
                  My Apps
                </Link>
              </div>
              <div className="pt-2">
                <Link className="ml-[54px]" to="/">
                  Flagship Pioneering
                </Link>
              </div>
              <div className="pt-2">
                <Link className="ml-[54px]" to="/">
                  Subscriptions
                </Link>
              </div>
              <div className="pt-2 flex h-full items-center">
                <Link className="ml-[54px]" to="/">
                  Add section
                </Link>
                <MdAddCircleOutline className="ml-1" />
              </div>
              <div className="pt-2 flex h-full items-center">
                <MdNotifications size={20} className="text-gray-700 ml-4" />
                <Link className="ml-4" to="/">
                  Notifications
                </Link>
              </div>
              <div className="pt-2 flex items-center h-full">
                <CgMenuGridR size={20} className="ml-4" />
                <Link className="ml-4" to="/">
                  Add apps
                </Link>
              </div>
            </div>
            <div className="bottom-0 hidden left-0 absolute w-full text-[12px] font-bold pb-4">
              <p className="flex justify-center">&copy; 2022 hub, inc.</p>
              <Link className="flex justify-center" to="/">
                privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
