import React from "react";
import rectangle84 from "../assets/Images/Rectangle84.png";
const About = () => {
  return (
    <section className="px-10 " id="">
      <div className="container mx-auto grid grid-cols-2 items-center">
        <img src={rectangle84} alt="/" />
        <div className="flex py-14 flex-col">
          <div className="flex items-center gap-2">
            <p className="w-[40px] bg-[#F3C522] h-[5px]"></p>
            <h3 className="text-2xl">About us</h3>
          </div>
          <h1 className="text-5xl mt-5">We Create Beautiful Design</h1>
          <h1 className="text-5xl">For Good Business</h1>
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
      </div>
    </section>
  );
};

export default About;
