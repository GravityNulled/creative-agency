import React from "react";
import { Link } from "react-scroll";
import talk from "../assets/Images/talk.png";
const Footer = () => {
  return (
    <footer className="p-10 bg-[#F7F9FD]" id="footer">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 w-[900px] mx-auto">
          <div className="flex gap-2 flex-col">
            <h2 className="font-bold  pb-4 text-2xl ">Explore</h2>
            <Link
              to="hero"
              className="hover:cursor-pointer hover:text-yellow-500"
              smooth={true}
              spy={true}
            >
              Home
            </Link>
            <Link
              className="hover:cursor-pointer hover:text-yellow-500"
              to="testimonials"
              smooth={true}
              spy={true}
            >
              Testimonial
            </Link>
            <Link
              className="hover:cursor-pointer hover:text-yellow-500"
              to="pricing"
              smooth={true}
              spy={true}
            >
              Pricing
            </Link>
            <Link
              className="hover:cursor-pointer hover:text-yellow-500"
              to="blogs"
              smooth={true}
              spy={true}
            >
              Blogs
            </Link>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="font-bold pb-4 text-2xl"> Any Queries</h2>
            <Link className="font-bold text-sm">Our Location</Link>
            <p>Tribeca, New York, USA</p>
            <Link className="font-bold text-sm">Call Us</Link>
            <p>(+880)244-35264</p>
            <Link className="font-bold text-sm">Send Us Mail</Link>
            <p>support@templatesjungle.com</p>
          </div>
          <div className="flex flex-col">
            <img src={talk} alt="/" width={200} />
            <p className="mt-7">
              Just feel free to contact if you wanna collaborate with us, or
              simply have a conversation.
            </p>
            <button className="p-3 mt-8 mx-auto bg-black text-white">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
