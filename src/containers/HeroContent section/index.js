import React from "react";
import Image from "next/image";

// image
import Iphone from "../../../public/iPhone_Black.png";

// useable component
import Wrapper from "@/component/Wrapper";
import Button from "@/component/button";
import Input from "@/component/input";

const HeroContent = () => {
  return (
    <Wrapper className="!p-0 w-screen overflow-hidden">
      <div className="mt-[90px] md:mt-[120px] p-2 lg:flex lg:justify-around">
        <div className="lg:my-[167px]">
          <h1 className="text-[22px] text-white text-center md:text-[45px] lg:text-[52px] lg:text-start ">
            The smarter way <br />
            <span className="font-semibold"> to Order your food</span>
          </h1>
          <div className="flex justify-center items-center mt-[10px] lg:justify-start ">
            <Input
              className=""
              type={"number"}
              placeholder={"Enter phone number"}
            />
            <Button>send</Button>
          </div>
          <h1
            children
            className="flex justify-center text-white text-[16px] lg:text-[22px] lg:block lg:mt-[15px]"
          >
            Avaliable on
          </h1>
          <div className=" relative flex justify-center  items-center lg:justify-start flex-row gap-[20px] mt-[10px] lg:mt-[24px]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
              >
                <rect width="45" height="45" rx="7.5" fill="black" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M33.3126 17.5634C33.0777 17.7022 30.5093 19.2204 30.5379 22.3037C30.5732 26.0298 33.872 27.3027 33.9967 27.3508C33.9984 27.3514 33.9995 27.3519 34 27.3521C33.999 27.3552 33.9974 27.3603 33.9952 27.3673C33.934 27.5604 33.4138 29.2047 32.2153 30.9017C31.1393 32.4209 30.0243 33.9354 28.2672 33.9684C27.4233 33.983 26.8589 33.7466 26.2724 33.5009C25.6582 33.2436 25.0197 32.9761 24.0103 32.9761C22.9533 32.9761 22.2852 33.2513 21.6414 33.5167C21.0834 33.7466 20.5435 33.9691 19.7843 33.9983C18.0874 34.0612 16.7968 32.3548 15.7126 30.8403C13.4989 27.7421 11.8052 22.0851 14.0791 18.2682C15.2071 16.3715 17.2243 15.1715 19.4153 15.1401C20.3592 15.1222 21.2739 15.4731 22.0744 15.7803C22.6855 16.0147 23.2301 16.2237 23.6706 16.2237C24.0658 16.2237 24.5959 16.0215 25.214 15.7858C26.1874 15.4146 27.3792 14.9601 28.6069 15.0803C29.4489 15.1149 31.809 15.409 33.3255 17.5557C33.3226 17.5575 33.3183 17.56 33.3126 17.5634ZM28.7221 9C28.8903 10.5386 28.2796 12.0822 27.3751 13.1924C26.4704 14.3009 24.9862 15.1646 23.5329 15.0505C23.3338 13.5432 24.0686 11.9715 24.9062 10.9903C25.8418 9.8802 27.419 9.053 28.7221 9Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <img src="/Googleplay.svg" alt="Googleplay" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-28 mini-phones:mt-44  b:mt-[230px] md:mt-[190px] sm:mt-[190px] lg:mt-0">
          <Image
            className=" abaolute top-[64.95px] w-[157.783px] h-[319px] md:top-[167px] md:w-[291px] md:h-[580px]"
            src={Iphone}
            alt="iphone"
          />
          <div className="absolute w-[266px] h-[298px] -z-50 md:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 499 459"
              fill="none"
            >
              <path
                opacity="0.551921"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M494.662 151.17C470.958 16.7346 322.188 -14.5006 206.065 5.97493C89.9423 26.4505 -19.7795 216.668 3.92506 351.103C27.6297 485.538 189.697 463.772 305.82 443.297C421.943 422.821 518.367 285.605 494.662 151.17"
                fill="#FFE749"
              />
            </svg>
          </div>
          <div className=" hidden md:block md:absolute md:w-[518px] md:[448px] md:top[230px] lg:top-[411.95px] md:-z-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 499 459"
              fill="none"
            >
              <path
                opacity="0.551921"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M494.662 151.17C470.958 16.7346 322.188 -14.5006 206.065 5.97493C89.9423 26.4505 -19.7795 216.668 3.92506 351.103C27.6297 485.538 189.697 463.772 305.82 443.297C421.943 422.821 518.367 285.605 494.662 151.17"
                fill="#FFE749"
              />
            </svg>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroContent;
