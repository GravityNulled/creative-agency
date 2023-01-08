import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import person from "../assets/Images/person.png";
import "swiper/css";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper";

const Testimonial = () => {
  return (
    <section className="bg-[#F7F9FD] px-10 mt-5" id="testimonials">
      <div className="container mx-auto py-32 grid grid-cols-2 items-center">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <p className="w-[40px] bg-[#F3C522] h-[5px]"></p>
            <h3 className="text-2xl">Testimonials</h3>
          </div>
          <h2 className="text-5xl mt-5">What our Clients Say</h2>
          <p className="mt-3 py-4 max-w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam tincid
            quisque faucibus velit felis tincidunt. Turpis platea sed arcu.
          </p>
        </div>
        {/* Left Grid */}
        <div>
          <Swiper
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
          >
            <SwiperSlide className="flex border">
              <img src={person} alt="" className="w-[200px]" />
              <div className="flex flex-col">
                <p className="text-gray-500 p-3">
                  “Lorem ipsum dolor sit amet, consectetur adip buscing elit.
                  Diam tincidunt quisque faucibus velit felis tincidunt turpis
                  tindiam cidunt sit.”
                </p>
                <h4 className="px-3 font-bold text-xl">Caramen Fendi</h4>
                <span className="px-3 mt-2">Fashin Closet</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex border">
              <img src={person} alt="" className="w-[200px]" />
              <div className="flex flex-col">
                <p className="text-gray-500 p-3">
                  “Lorem ipsum dolor sit amet, consectetur adip buscing elit.
                  Diam tincidunt quisque faucibus velit felis tincidunt turpis
                  tindiam cidunt sit.”
                </p>
                <h4 className="px-3 font-bold text-xl">Omar Mwinyi</h4>
                <span className="px-3 mt-2">Web Dev</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex  border">
              <img src={person} alt="" className="w-[200px]" />
              <div className="flex flex-col">
                <p className="text-gray-500 p-3">
                  “Lorem ipsum dolor sit amet, consectetur adip buscing elit.
                  Diam tincidunt quisque faucibus velit felis tincidunt turpis
                  tindiam cidunt sit.”
                </p>
                <h4 className="px-3 font-bold text-xl">Salman Khan</h4>
                <span className="px-3 mt-2">System Designer</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex border">
              <img src={person} alt="" className="w-[200px]" />
              <div className="flex flex-col">
                <p className="text-gray-500 p-3">
                  “Lorem ipsum dolor sit amet, consectetur adip buscing elit.
                  Diam tincidunt quisque faucibus velit felis tincidunt turpis
                  tindiam cidunt sit.”
                </p>
                <h4 className="px-3 font-bold text-xl">Frank Muruu</h4>
                <span className="px-3 mt-2">Network Admin</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
