import React, { useState } from "react";

// use-able component
import Wrapper from "@/component/Wrapper";

// content
import { Questions, Boxes } from "../content";

const QuerySection = () => {
  const [activeId, setActiveId] = useState(null);
  const [height, setHeight] = useState(0);

  const handleToggle = (id, e) => {
    setActiveId((prevId) => (prevId === id ? null : id));

    const answerHeight = e.currentTarget.querySelector(".answer").scrollHeight;
    setHeight(answerHeight);
  };

  return (
    <Wrapper className="!p-0 ">
      <div className="text-center">
        <h1 className="text-[22px] mt-[78px] lg:mt-[109px] lg:text-[42px] text-blue">
          Got questions?
        </h1>
        <p className="text-[16px] lg:text-[22px] text-grey">
          Perfect, we’ve got answers!
        </p>

        <div className="max-w-[780px] mx-auto mt-[44px]">
          {Questions.map((item) => {
            const isActive = activeId === item.id;
            return (
              <React.Fragment key={item.id}>
                <div
                  className={`min-w-[320px] lg:max-w-[780px] text-start flex-shrink-0 border-b-2 border-[#E8E8E8] cursor-pointer  md:border-4 md:rounded-[10px] md:my-[12px] p-[20px] mx-auto transition-all ${
                    isActive ? "md:border-[#68BAE3]" : ""
                  }`}
                  onClick={(e) => handleToggle(item.id, e)}
                >
                  <h1
                    className={`text-[16px] lg:text-[22px] text-[#14243C] leading-[30px] ${
                      isActive ? "text-blue" : "text-[#14243C]"
                    }`}
                  >
                    {item.question}
                  </h1>

                  <p
                    style={{
                      height: isActive ? height : 0,
                    }}
                    className={`${
                      isActive ? "mt-4" : ""
                    } transition-all overflow-hidden answer`}
                  >
                    {item.answer}
                  </p>
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <h1 className="text-[22px] lg:text-[42px] text-blue mt-[100px]">
          Still have a question?
        </h1>
        <p className="text-[16px] min-w-[241px] p-[39px] lg:p-0 lg:text-[22px]  sm:max-w-[704px] mx-auto text-center lg:text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center mt-[44px]">
          {Boxes.map((item) => {
            return (
              <div
                key={item.id}
                className="w-[280px] h-[199px] lg:w-[380px] lg:h-[199px] mt-[17px] lg:mt-0  rounded-[10px] border-[#E8E8E8] border-2  lg:ml-[20px] relative"
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
