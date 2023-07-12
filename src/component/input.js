import React from "react";

const Input = ({ className, type, placeholder }) => {
  return (
    <input
      className={`  outline-none border-2  px-2 py-1  border-light-grey my-6 rounded text-[16px] w-[170px] h-[35px] lg:w-[300px]  ${className}`}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
