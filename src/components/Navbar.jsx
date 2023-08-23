import { useState } from "react";
import { close, menu, greenBank } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className="w-full h-full flex justify-between items-center">
        <div>
          <img src={greenBank} alt="hoobank" className="w-[140px] h-[24px]" />
        </div>
        <div>
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav , index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                }`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-216 h-[48px] justify-center items-center hidden md:flex border-[#2BB32A] border-2 rounded-xl">
          <a className="text-[#2BB32A] font-poppins font-normal cursor-pointer text-[16px] px-8 py-2 ">
            CONNECT WALLET
          </a>
        </div>
      </div>
      <div className="sm:hidden flex items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            toggle ? "block" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } mb-4`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
