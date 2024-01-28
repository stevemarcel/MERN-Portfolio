import { useState } from "react";

import avatar from "../assets/images/avatar.png";

// Icons
import { RiHome2Fill } from "react-icons/ri";
import { FaHandshakeSimple } from "react-icons/fa6";
import { IoPersonSharp, IoChatbox } from "react-icons/io5";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

// Components
import NavItem from "./NavItem";
// import Btn from "./Btn";

const Navbar = () => {
  const menu = [
    {
      name: "Home",
      icon: RiHome2Fill,
    },
    {
      name: "Projects",
      icon: FaHandshakeSimple,
    },
    {
      name: "About",
      icon: IoPersonSharp,
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className=" flex justify-center p-3 md:px-4">
        <nav className="container flex justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="font-bold uppercase hover:text-pry-dark-100">
              Stephen Onyejuluwa
            </a>
          </div>

          {/* Hamburger Icon */}
          <div
            className="flex text-2xl items-center cursor-pointer md:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </div>
          <div className=" items-center gap-8 hidden md:flex">
            {menu.map((item) => (
              <NavItem name={item.name} Icon={item.icon} key={item.name} />
            ))}
          </div>
          <div className=" items-center gap-5 hidden md:flex">
            {/* <Btn text="Let's Talk" Icon={IoChatbox} className=" " /> */}
            <button className=" flex items-center gap-2 bg-primary py-2 px-4 text-white rounded-full text-sm font-semibold tracking-wider hover:bg-pry-dark-100">
              <IoChatbox />
              <p>Let&apos;s Talk</p>
            </button>
            <img src={avatar} alt="avatar" className="w-[40px] rounded-full cursor-pointer" />
          </div>
        </nav>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden py-3 text-primary bg-pry-light-100 ${
            isMobileMenuOpen ? "block" : "hidden"
          } transition ease-out duration-1000`}
        >
          {menu.map((item) => (
            <NavItem name={item.name} Icon={item.icon} key={item.name} />
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
