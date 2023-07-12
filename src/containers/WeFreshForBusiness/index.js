import Wrapper from "@/component/Wrapper";
import Button from "@/component/button";
import Input from "@/component/input";

import React from "react";

const WefreshForBusiness = () => {
  return (
    <>
      <Wrapper className="!p-0 h-[400px] mt-[106px] text-center">
        <h1 className="text-[22px] lg:text-[42px] text-[#68BAE3] font-semibold">
          WeFresh <span className="font-normal">Get the app</span>
        </h1>
        <p className=" min-w-[241px] lg:w-[540px] flex flex-col mx-auto mt-[4px] text-[16px] text-[#868E95]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-row gap-[17px] items-center justify-center mt-[37px]">
          <Input type={"number"} placeholder={"Enter phone number"} />
          <Button>send</Button>
        </div>
      </Wrapper>
    </>
  );
};

export default WefreshForBusiness;
