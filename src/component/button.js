import React from "react";

const Button = ({ className, children }) => {
  return (
    <button
      className={`bg-[#FFD476] w-[100px] mx-[10px] h-[35px] lg:w-[140px] lg:mx-[20px] rounded bg-btn-bg text-[16px]   ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
