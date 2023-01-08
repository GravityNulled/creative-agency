import React from "react";
import Logo from "../assets/Images/logo.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <header className=" px-10 w-full">
      <nav className="flex items-center justify-between container mx-auto">
        <img src={Logo} alt="Logo" />
        <ul className="text-xl flex items-center justify-center space-x-6">
          <li>
            <Link
              className="hover:cursor-pointer hover:text-yellow-500"
              to="/"
              smooth={true}
              spy={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:cursor-pointer hover:text-yellow-500"
              to="hero"
              smooth={true}
              spy={true}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="hover:cursor-pointer hover:text-yellow-500"
              to="testimonials"
              smooth={true}
              spy={true}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              className="hover:cursor-pointer hover:text-yellow-500"
              to="pricing"
              smooth={true}
              spy={true}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              className="hover:cursor-pointer hover:text-yellow-500"
              to="blogs"
              smooth={true}
              spy={true}
            >
              Blogs
            </Link>
          </li>
        </ul>
        <button className="relative flex items-center space-x-2">
          <span className="font-semibold hover:text-yellow-500">
            Let's Talk
          </span>
          <BsArrowRight className="hover:cursor-pointer hover:text-yellow-500" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
