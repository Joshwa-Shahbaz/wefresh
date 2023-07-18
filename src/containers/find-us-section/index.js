import Wrapper from "@/component/Wrapper";
import Button from "@/component/button";
import Input from "@/component/input";
import React from "react";
import ServiceFill from "../../../public/service-fill";
import YellowFill from "../../../public/find-yellow-fill";

const FindUs = () => {
  return (
    <Wrapper className="!p-0  h-[680px] md:h-[960px] lg:h-[702px] ">
      <div className="flex justify-center items-center lg:justify-around relative ">
        <div className="mt-[51px] lg:mt-[288px] ml-0 lg:ml-[50px] xl:ml-[170px] 2xl:ml-[203px] lg:mr-[50px]">
          <h1 className="text-[22px] flex justify-center lg:justify-start md:text-[42px] text-blue">
            Find us in these <span className="font-semibold">Area</span>
          </h1>
          <div className="flex flex-row gap-[19px] items-center justify-center mt-[22px]">
            <Input type={"text"} placeholder={"Enter your area"} />
            <Button>Search</Button>
          </div>
        </div>
        <div className="hidden lg:block ">
          <div className="w-[807px] h-[630px] absolute -right-60 -z-50">
            <ServiceFill />
          </div>
          <div className="lg:w-[450px] 2xl:w-[620px] h-[413px]  mt-[154px] mr-[50px]">
            <img src="/area-img.png" alt="area main image" />
          </div>
          <div className="w-[468px] h-[397px] absolute top-[260px]  lg:right-[60px] xl:right-[130px] 2xl:right-[250px] -z-50 ">
            <YellowFill />
          </div>
        </div>
      </div>

      {/* div for medium  to small size screen */}

      <div className="relative lg:hidden">
        <div className="sm:w-[404px] sm:h-[315px] md:w-[807px] md:h-[630px]  absolute right-0 -z-50">
          <ServiceFill />
        </div>
        <div className="flex justify-center lg:hidden md:mb-[159px]">
          <div className="w-[310px]  h-[206.5px] md:w-[620px] md:h-[413px]  md:mt-[140px] mt-[70px]">
            <img src="/area-img.png" alt="area main image" />
          </div>
        </div>
        <div className="w-[234px] h-[199px] md:w-[468px] md:h-[397px] small-mobile:left-[10%] absolute top-[120px] tap:left-[15%] sm:left-[18%] md:top-[305px]  md:left-[30px]  b:left-[70px] -z-50 ">
          <YellowFill />
        </div>
      </div>
    </Wrapper>
  );
};

export default FindUs;
