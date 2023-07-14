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
      <div className="flex justify-center flex-col lg:flex-row lg:justify-between  lg:pl-[124px]">
        <div class="flex flex-col  items-center justify-center relative mt-0 lg:mt-[227px]">
          <div className="absolute text-start">
            <h1 class=" text-[#68BAE3] text-[22px] text-center lg:text-start  lg:text-[42px]">
              Our <span className="font-semibold">Partner</span>
            </h1>
            <p className="w-[326px] text-[16px] h-[120px] text-[#868E95]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod.
            </p>
          </div>
          <div className="-z-50 w-[473px] h-[354px] md:w-[547px] xl:w-[547px] xl:h-[410px] lg:w-[450px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
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
        <div className=" hidden lg:block">
          <div className="absolute xl:w-[175px] xl:h-[175px] lg:w-[135px] lg:h-[135px] top-[124px] lg:left-[595px] xl:left-[671px]">
            <Image src={Seven} width="100%" alt="seven-logo" />
          </div>
          <div className="absolute xl:w-[175px] xl:h-[175px] lg:w-[135px] lg:h-[135px]  top-[432px] lg:left-[595px] xl:left-[671px]">
            <Image src={Makro} width="100%" alt="seven-logo" />
          </div>
          <div className="absolute xl:w-[175px] xl:h-[175px] lg:w-[135px] lg:h-[135px]  top-[287px] lg:left-[750px] xl:left-[832px]">
            <Image src={TrueCoffee} width="100%" alt="seven-logo" />
          </div>
          <div className="absolute xl:w-[175px] xl:h-[175px]  lg:w-[135px] lg:h-[135px] top-[212px] lg:left-[885px]  xl:left-[1039px]">
            <Image src={TrueYou} width="100%" alt="seven-logo" />
          </div>
          <div className="absolute xl:w-[175px] xl:h-[175px] lg:w-[135px] lg:h-[135px] top-[462px] lg:left-[895px] xl:left-[980px]">
            <Image src={CpFreshmart} width="100%" alt="seven-logo" />
          </div>
        </div>

        {/* ************************* */}
        <div className="absolute top-0 -left-[8%] tap:left-[8%] sm:left-[18%] md:left-[21%] lg:hidden">
          <div className="absolute w-[91px] h-[91px]  md:w-[130px] md:h-[130px] top-[396px] left-[97px]">
            <Image src={Seven} width="100%" alt="seven-logo" />
          </div>
          <div className="absolute w-[91px] h-[91px] md:w-[130px] md:h-[130px] top-[555px] left-[97px]">
            <Image src={Makro} width="100%" alt="seven-logo" />
          </div>
          <div className="absolute w-[91px] h-[91px] md:w-[130px] md:h-[130px] top-[481px] left-[181px]">
            <Image src={TrueCoffee} width="100%" alt="seven-logo" />
          </div>
          <div className="absolute w-[91px] h-[91px] md:w-[130px] md:h-[130px] top-[441px] left-[287px]">
            <Image src={TrueYou} width="100%" alt="seven-logo" />
          </div>
          <div className="absolute w-[91px] h-[91px] md:w-[130px] md:h-[130px] top-[570px] left-[256px]">
            <Image src={CpFreshmart} width="100%" alt="seven-logo" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default OurPartners;
