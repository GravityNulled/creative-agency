import React from "react";
import gears from "../assets/Images/settings.png";
import startup from "../assets/Images/startup.png";
import diamonds from "../assets/Images/diamonds.png";
const Pricing = () => {
  return (
    <section className="p-10">
      <div className="container mx-auto text-center">
        <h2 className="py-4 text-2xl">Pricing Plan</h2>
        <span className="font-bold py-8 text-4xl">Our Affordable Pricing</span>
        <div className="grid grid-cols-3 w-[1000px] mx-auto">
          <div className="flex flex-col border mt-9 rounded-lg p-8 min-h-[400px] w-[300px] items-center gap-3">
            <h1>Personal</h1>
            <img src={gears} alt="/" className="w-[50px] m-2" />
            <p className="text-3xl">
              $19.99/<span className="text-sm">mo</span>
            </p>
            <p className="border-b p-2">First Design Revision</p>
            <p className="border-b p-2">Phone & Email Support</p>
            <p className="border-b p-2">Power & Productive Dailing</p>
            <button className="p-3 mt-8 mx-auto border rounded-md">
              Choose Plan
            </button>
          </div>
          <div className="flex flex-col border mt-9 rounded-lg p-8 min-h-[400px] w-[300px] items-center gap-3">
            <h1>Small Team</h1>
            <img src={gears} alt="/" className="w-[50px] m-2" />
            <p className="text-3xl">
              $39.99/<span className="text-sm">mo</span>
            </p>
            <p className="border-b p-2">First Design Revision</p>
            <p className="border-b p-2">Phone & Email Support</p>
            <p className="border-b p-2">Power & Productive Dailing</p>
            <button className="p-3 mt-8 mx-auto border bg-black text-white rounded-md">
              Choose Plan
            </button>
          </div>
          <div className="flex flex-col border mt-9 rounded-lg p-8 min-h-[400px] w-[300px] items-center gap-3">
            <h1>Personal</h1>
            <img src={gears} alt="/" className="w-[50px] m-2" />
            <p className="text-3xl">
              $99.99/<span className="text-sm">mo</span>
            </p>
            <p className="border-b p-2">First Design Revision</p>
            <p className="border-b p-2">Phone & Email Support</p>
            <p className="border-b p-2">Power & Productive Dailing</p>
            <button className="p-3 mt-8 mx-auto border rounded-md">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
