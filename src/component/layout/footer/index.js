import Wrapper from "@/component/Wrapper";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Wrapper className="!p-0 h-[auto] lg:h-[336px] border-b-2 overflow-hidden">
        <div className="grid grid-flow-row-5 lg:grid-cols-5 px-[22px] ">
          <div className="mx-[248px] mt-[92px] ml-[149px]">joshwa</div>

          <div className="mt-[92px]">
            <h1 className="text-[16px] w-[114px] h-[24px] text-[#14243C] font-semibold">
              SERVICE AREA
            </h1>
            <p className="text-[16px] mt-[15px] w-[130px] h-[120px] text-[#868E95]">
              Lorem ipsum dol Psum dolor Sum dolor Lorem ipsum
            </p>
          </div>

          <div className="mt-[92px]">
            <h1 className="text-[16px] text-[#14243C] font-semibold">ABOUT</h1>
            <p className="w-[140px] text-[16px] mt-[15px] h-[90px] text-[#868E95]">
              Story of WeFresh Read our blog Sign up to deliver
            </p>
          </div>

          <div className="mt-[92px] ">
            <h1 className="text-[16px] text-[#14243C] font-semibold">HELP</h1>
            <p className="w-[91px] text-[16px] mt-[15px] h-[150px] text-[#868E95]">
              Help centre Read FAQs Community Security
            </p>
          </div>

          <div className=" mt-[92px] mr-[250px]">
            <h1 className="text-[16px] w-[95px] h-[30px] text-[#14243C] font-semibold">
              Avaliable on
            </h1>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
