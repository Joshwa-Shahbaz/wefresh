import React from "react";

const Toggle = (props) => {
  return (
    <svg
      width="24"
      className="mr-3 block lg:hidden hover:w-[26px]"
      height="24"
      viewBox="0 0 15 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.click}
    >
      <rect width="15" height="2" rx="1" fill="white" />
      <rect y="5" width="20" height="2" rx="1" fill="white" />
      <rect y="10" width="20" height="2" rx="1" fill="white" />
    </svg>
  );
};

export default Toggle;
