import { FaBars, FaTimes } from "react-icons/fa";
import { DesktopNav } from "./navbar/DesktopNav";
import { MobileNav } from "./navbar/MobileNav";
import { useState } from "react";

export const Navbar = ({ navItems, logo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute top-0 left-0 z-10 w-full">
      <div className="min-h-[60px] py-2 px-4 md:px-40 items-center relative">
        <div className="flex-1 md:flex-auto -ml-2 flex md:hidden absolute top-3/4 translate-y-1/2 left-[10%]">
          <button
            onClick={toggleCollapse}
            className="text-white hover:bg-transparent active:bg-transparent"
            // onBlur={toggleCollapse}
          >
            {isOpen ? <FaTimes w={3} h={3} /> : <FaBars w={5} h={5} />}
          </button>
        </div>
        <div className="flex flex-1 justify-center md:justify-start m-auto absolute md:static top-0 left-1/2 -translate-x-1/2 md:translate-x-0">
          <a className="flex-1" href="/">
            <img src={logo.dark} alt="Rekaz-logo" className="h-[140px] z-10" />
          </a>
          <div className="flex-1 hidden md:flex items-center justify-center">
            <DesktopNav navItems={navItems} />
          </div>
          <div className="hidden md:block flex-1" />
        </div>
      </div>
      <div>
        <div
          className={`transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{
            maxHeight: isOpen ? "100vh" : "0",
            overflow: "hidden",
          }}
        >
          <MobileNav navItems={navItems} />
        </div>
      </div>
    </div>
  );
};
