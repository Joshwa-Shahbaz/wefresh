import React from "react";

const CloseButton = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="mr-3 block lg:hidden "
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      onClick={props.close}
    >
      <rect
        x="1.84326"
        y="0.939331"
        width="18"
        height="2"
        rx="1"
        transform="rotate(45 1.84326 0.939331)"
        fill="white"
      />
      <rect
        x="14.5713"
        y="2.35358"
        width="18"
        height="2"
        rx="1"
        transform="rotate(135 14.5713 2.35358)"
        fill="white"
      />
    </svg>
  );
};

export default CloseButton;
