import React, { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai'
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
      <div className="fixed w-full z-30 h-[60px] bg-white border border-b">
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
        <div className="left-0 fixed top-0 md:w-[210px] z-30 w-full h-screen md:border md:border-r">
            <div onClick={navMenu} className="flex justify-between w-full items-center px-10 mt-1.5">
              <p className="text-[30px] font-bold font-mono text-blue-900">
                hub
              </p>
            <BiMenu size={30} className="md:hidden"></BiMenu> 
              
          </div>
        </div>
      </div>
    </header>
  );
}
