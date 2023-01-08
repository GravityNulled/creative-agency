import React from "react";
import computer from "../assets/Images/computer.png";
import animation from "../assets/Images/animation.png";
import camera from "../assets/Images/creative.png";
import dataresearch from "../assets/Images/data-research.png";
import seo from "../assets/Images/seo.png";
import code from "../assets/Images/code.png";
import creative from "../assets/Images/creative.png";
const Services = () => {
  return (
    <section className="px-10" id="services">
      <div className="container mx-auto grid grid-cols-2 items-center ">
        <div className="flex py-14 flex-col">
          <div className="flex items-center gap-2">
            <p className="w-[40px] bg-[#F3C522] h-[5px]"></p>
            <h3 className="text-2xl">Services</h3>
          </div>
          <h1 className="text-5xl mt-5">Our Ability For Solutions</h1>
          <p className="mt-3 py-4 max-w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
            tincidunt quisque faucibus velit felis tincidunt. Turpis platea sed
            arcu aliquam lorem in. In ut mattis faucibus purus. Donec libero
            bibendum ut id risus, bibendum faucibus velit mattis diam etiam.
          </p>
          <button className="bg-black w-[200px] py-5 mt-6 text-white">
            Read More
          </button>
        </div>
        {/* Left */}
        <div className="flex flex-col-3 gap-5 items-center justify-center">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col p-4 border rounded-xl items-center">
              <img src={computer} alt="" className="w-[30px]" />
              <p>Branding</p>
            </div>
            <div className="flex flex-col p-4 border rounded-xl items-center shadow-sm">
              <img src={animation} alt="" className="w-[30px]" />
              <p>Animations</p>
            </div>
          </div>
          <div className="flex flex-col gap-20">
            <div className="flex flex-col p-4 border rounded-xl items-center shadow-sm">
              <img src={camera} alt="" className="w-[30px]" />
              <p>Photography</p>
            </div>
            <div className="flex flex-col p-4 border rounded-xl items-center shadow-sm">
              <img src={dataresearch} alt="" className="w-[30px]" />
              <p>Bussiness Plan</p>
            </div>
            <div className="flex flex-col p-4 border rounded-xl items-center shadow-sm">
              <img src={seo} alt="" className="w-[30px]" />
              <p>Research</p>
            </div>
          </div>
          <div className="flex flex-col gap-20">
            <div className="flex flex-col p-4 border rounded-xl items-center shadow-sm">
              <img src={code} alt="" className="w-[30px]" />
              <p>Development</p>
            </div>
            <div className="flex flex-col p-4 border rounded-xl items-center shadow-sm">
              <img src={creative} alt="" className="w-[30px]" />
              <p>UX/UI Design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
