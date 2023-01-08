import React from "react";
import logo1 from "../assets/Images/logo1.png";
import logo2 from "../assets/Images/logo2.png";
import logo3 from "../assets/Images/logo3.png";
import logo4 from "../assets/Images/logo4.png";
const Sponsors = () => {
  return (
    <section className="p-20 border-t" id="sponsors">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-32">
          <img src={logo1} className="w-[80px]" alt="" />
          <img src={logo2} className="w-[80px]" alt="" />
          <img src={logo3} className="w-[80px]" alt="" />
          <img src={logo4} className="w-[80px]" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
