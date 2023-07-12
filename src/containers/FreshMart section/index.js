import React from "react";
import Image from "next/image";
import Iphone from "../../../public/freshmart.png";
import Circle from "../../../public/circle.png";
import Wrapper from "@/component/Wrapper";

const data = [
  {
    id: 1,
    heading: "Lorem ipsum dolor sit",
    paragraph:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
  },
  {
    id: 2,
    heading: "Lorem ipsum dolor sit",
    paragraph:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
  },
  {
    id: 3,
    heading: "Lorem ipsum dolor sit",
    paragraph:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
  },
];

const FreshMart = () => {
  return (
    <Wrapper className="!p-0 overflow-hidden relative">
      <div className="my-[50px] items-center lg:flex lg:justify-around">
        <div className="flex justify-center items-center ">
          <Image
            className=" abaolute top-[64.95px] w-[157.783px] h-[319px] md:top-[167px] md:w-[286px] md:h-[580px]"
            src={Iphone}
            alt="iphone"
          />
          <Image
            className="absolute w-[266px] h-[268px] md:w-[444px] md:h-[448px] justify-center -z-50"
            src={Circle}
            alt="iphone"
          />
        </div>
        <div className="flex flex-col justify-center mt-[20px]">
          {data.map((item) => {
            return (
              <div key={item.id} className="">
                <div className="relative mb-[10px] w-[320px] rounded-[10px] mx-auto md:w-[577px] md:h-[195px] hover:bg-blue-100 group">
                  <div className="w-[50px] h-[50px] absolute rotate-45 top-[35%] -left-[15px] group-hover:bg-blue-100"></div>
                  <div className=" relative p-[39px]  md:p-[48px] z-50 ">
                    <h1 className="text-[22px] text-[#68BAE3]">
                      {item.heading}
                    </h1>
                    <p className="text-[#868E95] text-[16px]">
                      {item.paragraph}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default FreshMart;
