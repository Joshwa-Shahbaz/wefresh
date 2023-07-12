// imports from react
import React from "react";
import Image from "next/image";

// component
import Wrapper from "@/component/Wrapper";

// images
import AppleButton from "../../../public/Applebutton.png";
import GooglePlayButton from "../../../public/GoogleplayButton.png";

const GetApp = () => {
  return (
    <>
      <Wrapper className=" h-[430px] text-center relative">
        <h1 className=" text-[22px] lg:text-[42px] mt-[106px]  text-[#68BAE3]">
          Ready to <span className="font-semibold">Get the app</span>
        </h1>
        <p className="min-w-[241px] lg:max-w-[540px] flex flex-col mx-auto mt-[4px] text-[16px] text-[#868E95]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
        <div className=" relative flex flex-col items-center justify-center mt-[57px] lg:flex-row gap-[17px]  lg:mt-[35px]">
          <div>
            <Image src={AppleButton} alt="apple-button" />
          </div>
          <div>
            <Image src={GooglePlayButton} alt="google-button" />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default GetApp;
