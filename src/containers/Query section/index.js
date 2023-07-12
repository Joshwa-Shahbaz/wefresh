import Wrapper from "@/component/Wrapper";
import React, { useState } from "react";

// content
import { Questions, Boxes } from "../content";

const QuerySection = () => {
  const [activeId, setActiveId] = useState(null);

  const handleToggle = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <Wrapper className="!p-0">
      <div className="text-center">
        <h1 className="text-[22px] lg:text-[42px] text-[#68BAE3]">
          Got questions?
        </h1>
        <p className="text-[16px] lg:text-[22px] text-[#868E95]">
          Perfect, we’ve got answers!
        </p>

        <div className="max-w-[780px] mx-auto mt-[44px]">
          {Questions.map((item) => {
            const isActive = activeId === item.id;
            return (
              <React.Fragment key={item.id}>
                <div
                  className={`min-w-[320px] lg:max-w-[780px] text-start h-[70px] flex-shrink-0 border-b-2 md:border-[#E8E8E8] md:border-4 md:rounded-[10px] md:my-[12px] mx-auto ${
                    isActive ? "h-auto" : ""
                  }`}
                  onClick={() => handleToggle(item.id)}
                >
                  <h1 className="text-[16px] md:text-[22px] text-[#14243C] leading-[30px] p-[20px]">
                    {item.question}
                  </h1>
                </div>
                {isActive && (
                  <div className="max-w-[780px] mt-0 md:mt-[12px] border-b-2 text-start h-[auto] md:h-[180px] flex-shrink-0 md:rounded-[10px] md:border-[#68BAE3] md:border-4">
                    <div className="flex flex-col p-[20px]">
                      <h1 className="text-[#68BAE3] text-[16px] md:text-[22px] font-normal">
                        {item.question}
                      </h1>
                      <p className="my-[12px] text-[16px] text-[#868E95]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
        <h1 className="text-[22px] lg:text-[42px] text-[#68BAE3] mt-[100px]">
          Still have a question?
        </h1>
        <p className="text-[16px] min-w-[241px] p-[39px] lg:p-0 lg:text-[22px]  sm:max-w-[704px] mx-auto text-center text-[#868E95]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center mt-[44px]">
          {Boxes.map((item) => {
            return (
              <div
                key={item.id}
                className="w-[280px] h-[199px] lg:w-[380px] lg:h-[199px] mt-[17px] lg:mt-0  rounded-[10px] border-[#E8E8E8] border-2  ml-[20px] relative "
              >
                <div className="relative text-center top-[50%] ">
                  <h1 className="text-[22px] text-[#14243C]  ">{item.h1}</h1>
                  <p className="text-[#868E95] text-[16px]">{item.p}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default QuerySection;
