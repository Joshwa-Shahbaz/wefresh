import Wrapper from "@/component/Wrapper";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Service } from "../content";

const Services = () => {
  return (
    <Wrapper className="!p-0  h-[455px] lg:h-[566px] overflow-hidden">
      <h1 className="text-[22px] lg:text-[42px] text-blue flex justify-center mt-[99px]">
        We've more<span className="font-semibold">&nbsp;services</span>
      </h1>
      <div className="hidden lg:flex justify-center mt-[82px]">
        {Service.map((item) => {
          return (
            <div
              className="w-[220px] h-[240px] hover:scale-105 transition-transform group"
              key={item.id}
            >
              <img
                className="mx-[55px] w-[120px] h-[120px]"
                src={item.image}
                alt={item.title}
              />
              <h1 className="flex justify-center mt-[15px] text-grey text-[22px] group-hover:text-blue">
                {item.title}
              </h1>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center md:ml-[50px] ml-0  mt-[75px] lg:hidden">
        <Swiper
          className="bg-swiper-bg lg:bg-white"
          loop={true}
          spaceBetween={50}
          slidesPerView={1.7}
          breakpoints={{
            640: {
              slidesPerView: 2.7,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {Service.map((item, index) => (
            <SwiperSlide key={index}>
              <div className=" flex flex-col justify-center items-center hover:scale-105 transition-transform group w-[186px] h-[220px]  ">
                <img
                  className="w-[120px] h-[120px]"
                  src={item.image}
                  alt={item.title}
                />
                <h1 className="mt-[15px] text-grey text-[22px] group-hover:text-blue">
                  {item.title}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default Services;
