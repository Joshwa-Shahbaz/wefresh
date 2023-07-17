import Wrapper from "@/component/Wrapper";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const data = [
  {
    id: 1,
    image: "/Store.png",
    title: "Store",
  },
  {
    id: 2,
    image: "/Grocery.png",
    title: "Grocery",
  },
  {
    id: 3,
    image: "/Cafe.png",
    title: "Cafe",
  },
  {
    id: 4,
    image: "/food.png",
    title: "Food",
  },
];

const Services = () => {
  return (
    <Wrapper className="!p-0  h-[455px] lg:h-[566px] overflow-hidden">
      <h1 className="text-[22px] lg:text-[42px] text-blue flex justify-center mt-[99px]">
        We've more<span className="font-semibold">&nbsp;services</span>
      </h1>
      <div className="hidden lg:flex justify-center mt-[82px]">
        {data.map((item) => {
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

      <div className="flex justify-center  mt-[75px] lg:hidden">
        <Swiper loop={true} spaceBetween={50} slidesPerView={3}>
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className=" flex flex-col justify-center items-center w-[186px] h-[230px]">
                <img
                  className="w-[120px] h-[120px]"
                  src={item.image}
                  alt={item.title}
                />
                <h1 className="mt-[15px] text-grey text-[22px]">
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
