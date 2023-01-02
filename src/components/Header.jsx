import React from "react";
import Logo from "../assets/Images/logo.png";
import { BsArrowRight } from "react-icons/bs";
const Header = () => {
  return (
    <header className="fixed w-full">
      <nav className="flex items-center justify-between container mx-auto">
        <img src={Logo} alt="Logo" />
        <ul className="text-xl flex items-center justify-center space-x-6">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#Hero">About Us</a>
          </li>
          <li>
            <a href="#Project">Works</a>
          </li>
          <li>
            <a href="#Blogs">Blogs</a>
          </li>
          <li>
            <a href="#Contact">Contact us</a>
          </li>
        </ul>
        <button className="relative flex items-center space-x-2">
          <span className="font-semibold">Let's Talk</span>
          <BsArrowRight />
        </button>
      </nav>
    </header>
  );
};

export default Header;
