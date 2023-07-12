import Button from "@/component/button";
import Input from "@/component/input";
import React from "react";
import Image from "next/image";
import Iphone from "../../../public/iPhone_Black.png";
import Wrapper from "@/component/Wrapper";

const HeroContent = () => {
  return (
    <Wrapper className="!p-0 w-screen overflow-hidden">
      <div className="my-[120px] p-2 lg:flex lg:justify-around">
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
            className="flex justify-center text-white text-[22px] lg:block lg:mt-[15px]"
          >
            Avaliable on
          </h1>
        </div>
        <div className="flex justify-center items-center mt-36 b:mt-[250px] md:mt-[290px] sm:mt-[160px] lg:mt-0">
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
