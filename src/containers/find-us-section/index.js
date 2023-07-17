import Wrapper from "@/component/Wrapper";
import Button from "@/component/button";
import Input from "@/component/input";
import React from "react";
import ServiceFill from "../../../public/service-fill";
import YellowFill from "../../../public/find-yellow-fill";

const FindUs = () => {
  return (
    <Wrapper className="!p-0  h-[702px] overflow-hidden">
      <div className="flex justify-around ">
        <div className="mt-[288px]">
          <h1 className="text-[42px] text-blue">
            Find us in these <span className="font-semibold">Area</span>
          </h1>
          <div className="flex flex-row gap-[19px] items-center justify-center mt-[22px]">
            <Input type={"text"} placeholder={"Enter your area"} />
            <Button>Search</Button>
          </div>
        </div>
        <div className="relative  ">
          <div className="w-[807px] h-[630px] absolute  -z-50">
            <ServiceFill />
          </div>
          <div className="w-[620px] h-[413px]  mt-[154px] ">
            <img src="/area-img.png" alt="area main image" />
          </div>
          <div className="w-[468px] h-[397px] absolute top-[305px] -left-[80px] -z-50 ">
            <YellowFill />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FindUs;
