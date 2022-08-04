import React from "react";
import ApplicationCard from "./applicationCard";
import { IoIosArrowDropup } from "react-icons/io";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import Logo from "./images/sloth.png";
import SortButton from "./dropdown/dropdown. button";

const apps = [
  {
    name: "CBN",
    logo: <img src={Logo} width={80} alt="logo" />,
    menu: <BsThreeDots size={20} />,
  },
  {
    name: "zoom",
    logo: <img src={Logo} width={80} alt="logo" />,
    menu: <BsThreeDots size={20} />,
  },
  {
    name: "PHCN",
    logo: <img src={Logo} width={80} alt="logo" />,
    menu: <BsThreeDots size={20} />,
  },
  {
    name: "crabs",
    logo: <img src={Logo} width={80} alt="logo" />,
    menu: <BsThreeDots size={20} />,
  },
  {
    name: "fish",
    logo: <img src={Logo} width={80} alt="logo" />,
    menu: <BsThreeDots size={20} />,
  },
  {
    name: "zoom",
    logo: <img src={Logo} width={80} alt="logo" />,
    menu: <BsThreeDots size={20} />,
  },
  {
    name: "statcrawler",
    logo: <img src={Logo} width={80} alt="logo" />,
    menu: <BsThreeDots size={20} />,
  },
  {
    name: "piracy",
    logo: <img src={Logo} width={80} alt="logo" />,
    menu: <BsThreeDots size={20} />,
  },
  {
    name: "midfly",
    logo: <img src={Logo} width={80} alt="logo" />,
    menu: <BsThreeDots size={20} />,
  },
  {
    name: "zone",
    logo: <img src={Logo} width={80} alt="logo" />,
    menu: <BsThreeDots size={20} />,
  },
  {
    name: "Gray-matter",
    logo: <img src={Logo} width={80} alt="logo" />,
    menu: <BsThreeDots size={20} />,
  },
  {
    name: "coke",
    logo: <img src={Logo} width={80} alt="logo" />,
    menu: <BsThreeDots size={20} />,
  },
  {
    name: "coke",
    logo: <img src={Logo} width={80} alt="logo" />,
    menu: <BsThreeDots size={20} />,
  },
  {
    name: "coke",
    logo: <img src={Logo} width={80} alt="logo" />,
    menu: <BsThreeDots size={20} />,
  },
];

const Application = () => {
  return (
    <div className="lg:px-[200px] lg:py-[100px] py-[100px]">
      <div className="flex text-[15px] md:ml-[220px] ml-[40px] justify-between">
        <h2 className="font-bold">My Apps</h2>
        <SortButton className=""></SortButton>
      </div>
      <div className="md:ml-[140px]">
        <h2 className="font-bold text-[13px] md:ml-[85px] ml-[40px] mt-6 flex">
          <span>
            <IoIosArrowDropup className="mr-1" size={16} />
          </span>
          Flagship Pioneering
        </h2>
        <div className="flex flex-wrap md:ml-[90px] lg:justify-start justify-center lg:w-[1000px] mt-6 gap-[10px]">
          {apps.map((v, index) => (
            <ApplicationCard {...v} key={index} name={v.name} />
          ))}
        </div>
      </div>
      <div className="md:hidden left-0 pt-10 absolute w-full text-[12px] font-bold pb-4">
        <p className="flex justify-center">&copy; 2022 hub, inc.</p>
        <Link className="flex justify-center" to="/">
          privacy
        </Link>
      </div>
    </div>
  );
};

export default Application;
