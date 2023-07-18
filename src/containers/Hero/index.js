import Image from "next/image";
import React from "react";

// image
import MobileImage from "../../../public/fill.png";

// use-able component
import HeroContent from "../HeroContent section/index.js";
import Wrapper from "@/component/Wrapper";

const Hero = () => {
  return (
    <Wrapper className="!p-0 h-[auto] lg:h-[840px] overflow-hidden ">
      <Image
        className="w-screen absolute -top-16  -z-50 small-mobile:-top-60 check:-top-[380px] sm:-top-[320px] md:-top-[410px] b:-top-[520px] lg:hidden "
        src={MobileImage}
        width="100%"
        alt=""
      />

      {/* fill for large screen */}
      {/* blue fill  */}
      <div className="hidden lg:block absolute lg:-left-[400px] -z-50 xl:-left-[250px] 2xl:-left-[100px] xxl:-left-[0] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1139"
          height="889"
          viewBox="0 0 830 794"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M830 326.814C830 566.501 456.183 833.786 197.229 788.109C-61.7257 742.432 -309 409.823 -309 170.136C-309 -69.5501 6.13835 -96 231.269 -96C456.4 -96 830 87.1273 830 326.814"
            fill="#96D5F0"
          />
        </svg>
      </div>
      {/* light blue fill */}
      <div className="absolute hidden 2xl:block left-[1205px] -z-50 flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="732"
          height="153"
          viewBox="0 0 732 153"
          fill="none"
        >
          <path
            opacity="0.197568"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 -134.595C0 13.0244 240.24 177.641 406.662 149.51C573.084 121.378 732 -83.471 732 -231.09C732 -378.71 529.47 -395 384.786 -395C240.101 -395 0 -282.215 0 -134.595"
            fill="#96D5F0"
          />
        </svg>
      </div>
      {/* right blue fill */}
      <div className="hidden lg:block absolute lg:top-[77px] -z-50 lg:-right-[140px] xl:-right-[80px] 2xl:-right-10 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="182"
          height="397"
          viewBox="0 0 182 397"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 178.113C0 66.7069 101.082 0 212.532 0C323.982 0 468 48.5139 468 159.921C468 271.327 332.569 397 221.119 397C109.669 397 0 289.52 0 178.113Z"
            fill="#96D5F0"
          />
        </svg>
      </div>
      <HeroContent />
    </Wrapper>
  );
};

export default Hero;
