import React from "react";
import rectangle83 from "../assets/Images/Rectangle83.png";
import rectangle41 from "../assets/Images/Rectangle41.png";
import rectangle39 from "../assets/Images/Rectangle39.png";
const Hero = () => {
  return (
    <section className="p-10 bg-[#F7F9FD]">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 mt-10 p-4">
          {/* Right */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-2xl uppercase p-4">
              Top design agency
            </h3>
            <p className="font-bold text-7xl py-4">
              We are best digital creative agency based in New York, USA.
            </p>
            <p className="leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              tincidunt quisque faucibus velit felis tincidunt. Turpis platea
              sed arcu aliquam lorem in. In ut mattis faucibus purus.
            </p>
            <button className="bg-black w-[200px] py-5 mt-6 text-white">Contact Us</button>
          </div>
          {/* Left */}
          <div className="flex flex-wrap">
            <img src={rectangle83} alt="" className="w-[300px]" />
            <img src={rectangle39} alt="" className="w-[280px]" />
            <img src={rectangle41} alt="" className="w-[300px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
