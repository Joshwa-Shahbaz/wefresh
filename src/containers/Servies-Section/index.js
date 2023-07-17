import Wrapper from "@/component/Wrapper";

import React from "react";

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
    <Wrapper className="!p-0 h-[566px] overflow-hidden">
      <h1 className="text-[42px] text-blue flex justify-center mt-[99px]">
        We’ve more<span className="font-semibold">&nbsp;services</span>
      </h1>
      <div className="hidden lg:flex justify-center mt-[82px] ">
        {data.map((item) => {
          return (
            <div className="group">
              <img
                className="mx-[55px] w-[120px] h-[120px] "
                src={item.image}
                alt={item.title}
              />
              <h1 className="flex justify-center mt-[15px] text-grey text-[22px]">
                {item.title}
              </h1>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Services;
