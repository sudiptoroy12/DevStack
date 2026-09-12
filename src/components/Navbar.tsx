import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/logo-text.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between ">
        {/*Hamburger*/}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden cursor-pointer "
        >
          {isOpen ? (
            <RxCross1 className="w-5 h-7" />
          ) : (
            <RxHamburgerMenu className="w-5 h-7" />
          )}
        </button>

        {/* Logo */}
        <div className="w-28 md:w-32 cursor-pointer">
          <img src={logo} alt="devstack logo" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className=" text-[#D91B7E]">
            Home
          </a>

          <a href="#" className="text-gray-700 hover:text-[#D91B7E]">
            Technologies
          </a>

          <a href="#" className="text-gray-700 hover:text-[#D91B7E]">
            Projects
          </a>

          <a href="#" className="text-gray-700 hover:text-[#D91B7E]">
            About
          </a>

          <a href="#" className="text-gray-700 hover:text-[#D91B7E]">
            Contact
          </a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-1">
          <button className="px-2 py-1 md:px-4 md:py-2 text-gray-700 hover:border hover:border-gray-300 rounded-4xl hover:bg-[#D91B7E] hover:text-white cursor-pointer">
            Sign In
          </button>

          <button className="px-2 py-1 md:px-4 md:py-2 text-white bg-[#D91B7E] rounded-4xl hover:bg-red-400 cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mt-5 h-[400px]   flex  flex-col justify-center items-center gap-4 border-t pt-5 md:hidden">
          <a href="#" className="text-gray-700">
            Home
          </a>
          <a href="#" className="text-gray-700">
            Technologies
          </a>
          <a href="#" className="text-gray-700">
            Projects
          </a>
          <a href="#" className="text-gray-700">
            About
          </a>
          <a href="#" className="text-gray-700">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
