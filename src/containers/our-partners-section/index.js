import Wrapper from "@/component/Wrapper";
import Image from "next/image";
import React from "react";
import Seven from "../../../public/7-Eleven.png";
import Makro from "../../../public/Makro.png";
import TrueCoffee from "../../../public/TrueCoffee.png";
import TrueYou from "../../../public/TrueYou.png";
import CpFreshmart from "../../../public/CpFreshmart.png";

const OurPartners = () => {
  return (
    <Wrapper className="!p-0 h-[760px] overflow-hidden relative">
      <div className="flex justify-center flex-row lg:justify-between">
        <div class="flex flex-col items-center justify-center relative mt-0 lg:mt-[227px] ">
          <div className="absolute text-start">
            <h1 class=" text-[#68BAE3] text-[42px]">
              Our <span className="font-semibold">Partner</span>
            </h1>
            <p className="w-[326px] h-[120px] text-[#868E95]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod.
            </p>
          </div>
          <div className="-z-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="547"
              height="410"
              viewBox="0 0 547 410"
              fill="none"
            >
              <path
                opacity="0.197568"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M303.886 407.63C428.248 386.57 547 233.216 547 122.706C547 12.1951 445.242 0 287.538 0C129.834 0 0 84.4332 0 194.944C0 305.454 179.524 428.69 303.886 407.63Z"
                fill="#96D5F0"
              />
            </svg>
          </div>
        </div>
        <div className="">
          <div className="absolute top-[124px] left-[671px]">
            <Image src={Seven} width="100%" alt="seven-logo" />
          </div>
          <div className="absolute top-[432px] left-[671px]">
            <Image src={Makro} width="100%" alt="seven-logo" />
          </div>
          <div className="absolute top-[287px] left-[832px]">
            <Image src={TrueCoffee} width="100%" alt="seven-logo" />
          </div>
          <div className="absolute top-[212px] left-[1039px]">
            <Image src={TrueYou} width="100%" alt="seven-logo" />
          </div>
          <div className="absolute top-[462px] left-[980px]">
            <Image src={CpFreshmart} width="100%" alt="seven-logo" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default OurPartners;
