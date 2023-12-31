import Wrapper from "@/component/Wrapper";
import logo from "../../../../public/wefresh-footer.png";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <Wrapper className="!p-0 h-[auto] lg:h-[336px] border-b-2 overflow-hidden">
        <footer className="grid grid-row-5 lg:grid-cols-5 lg:pl-[100px] pl-[20px] lg:pr-[130px] xl:pl-[249px] mt-0 xl:pr-[250px] lg:mt-[92px]">
          <div className=" w-[116.09px] h-[43.666px] ">
            <Image src={logo} width="100%" alt="footer logo" />
          </div>

          <div className="xl:ml-[124px] lg:ml-[80px] mt-[39px] lg:mt-0">
            <h1 className="text-[16px] w-[144px] h-[24px] text-[#14243C] font-semibold">
              SERVICE AREA
            </h1>
            <p className="text-[16px] w-[130px] h-[120px] mt-[15px]  text-[#868E95]">
              Lorem ipsum dol Psum dolor Sum dolor Lorem ipsum
            </p>
          </div>

          <div className="lg:ml-[120px] mt-[41px] lg:mt-0">
            <h1 className="text-[16px] text-[#14243C] font-semibold">ABOUT</h1>
            <p className="text-[16px] w-[140px] h-[90px] mt-[15px] text-[#868E95]">
              Story of WeFresh Read our blog Sign up to deliver
            </p>
          </div>

          <div className="lg:ml-[134px] mt-[41px] lg:mt-0">
            <h1 className="text-[16px] text-[#14243C] font-semibold">HELP</h1>
            <p className="text-[16px] w-[91px] h-[150px] mt-[15px] text-[#868E95]">
              Help centre Read FAQs Community Security
            </p>
          </div>

          <div className="relative mt-[41px] lg:mt-0 lg:ml-[120px] xl:ml-[166px]">
            <div className=" lg:grid ">
              <h1 className=" text-[16px] w-[95px] h-[30px] text-[#14243C] font-semibold mx-auto">
                Avaliable on
              </h1>
              <div className=" flex mt-[19px] flex-row gap-[17px] justify-center lg:mt-[9px]">
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
              </div>
            </div>
          </div>
        </footer>
        <div className="border-t-2 w-screen mt-[55px] lg:mt-0">
          <h1 className="mt-[24px] mb-[65px] md:mb-[20px] ml-[13px] md:ml-[200px] lg:ml-[250px] text-grey text-[16px]">
            © 2020 WeFresh. All Rights Reserved.
          </h1>
        </div>
      </Wrapper>
    </>
  );
};

export default Footer;
