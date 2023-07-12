import Wrapper from "@/component/Wrapper";
import React, { useState } from "react";

const questions = [
  {
    id: 1,
    question: "How to get started?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur cum vero consectetur ab eius excepturi nisi!",
  },
  {
    id: 2,
    question: "How to get started?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur cum vero consectetur ab eius excepturi nisi!",
  },
  {
    id: 3,
    question: "How to get started?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur cum vero consectetur ab eius excepturi nisi!",
  },
  {
    id: 4,
    question: "How to get started?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur cum vero consectetur ab eius excepturi nisi!",
  },
];

const boxes = [
  {
    id: 1,
    h1: "+66 8959888",
    p: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    id: 2,
    h1: "Support@service.com",
    p: "Lorem ipsum dolor sit amet, consectetur",
  },
];

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

        <div className="max-w-[780px] mx-auto my-[44px]">
          {questions.map((item) => {
            const isActive = activeId === item.id;
            return (
              <React.Fragment key={item.id}>
                <div
                  className={`min-w-[320px] lg:max-w-[780px] text-start h-[70px] flex-shrink-0 border-[#E8E8E8] border-4 rounded-[10px] my-[12px] mx-auto transition-transform  ${
                    isActive ? "h-auto" : ""
                  }`}
                  onClick={() => handleToggle(item.id)}
                >
                  <h1 className="text-[22px] text-[#14243C] leading-[30px] p-[20px]">
                    {item.question}
                  </h1>
                </div>
                {isActive && (
                  <div className="max-w-[780px] mt-[12px] text-start h-[180px] flex-shrink-0 rounded-[10px] border-[#68BAE3] border-4">
                    <div className="flex flex-col p-[30px]">
                      <h1 className="text-[#68BAE3] text-[22px] font-normal">
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
        <p className="text-[16px] min-w-[241px] p-[39px] lg:p-0 lg:text-[22px]  lg:max-w-[704px] mx-auto text-center text-[#868E95]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center mt-[44px]">
          {boxes.map((item) => {
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
