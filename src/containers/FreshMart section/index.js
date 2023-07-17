import React from "react";
import Image from "next/image";

// use able component
import Wrapper from "@/component/Wrapper";

// content
import { Data } from "../content";

// images
import Iphone from "../../../public/freshmart.png";
import Circle from "../../../public/circle.png";

const FreshMart = () => {
  return (
    <Wrapper className="!p-0 overflow-hidden relative">
      <div className="my-[50px] items-center lg:flex lg:justify-around">
        <div className="flex justify-center items-center lg:pl-[101px] ">
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
          {Data.map((item) => {
            return (
              <div key={item.id} className="">
                <div className="relative mb-[10px] w-[320px] rounded-[10px] mx-auto xl:w-[557px] md:w-[557px] lg:w-[400px]  xl:h-[195px] hover:bg-light-blue group">
                  <div className="w-[50px] h-[50px] absolute rotate-45 top-[35%] -left-[15px] lg:group-hover:bg-light-blue"></div>
                  <div className=" relative p-[39px]  md:p-[48px] ">
                    <h1 className="text-[22px] text-blue">{item.heading}</h1>
                    <p className="text-grey text-[16px]">{item.paragraph}</p>
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
