import Link from "next/link";

// imports from next
import React, { useState, useEffect } from "react";

// useable component
import Wrapper from "../../Wrapper";

// images
import Logo from "../../../../public/wefresh-logo";
import Toggle from "../../../../public/togglle-bar";
import CloseButton from "../../../../public/Close-button";

const Header = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const options = ["Our App", "Our Business", "About us", "English"];

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  useEffect(() => {
    if (mobileMenuVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuVisible]);

  return (
    <>
      <Wrapper className="!p-0">
        <header
          className={`w-full h-[90px] top-0 left-0 ${
            mobileMenuVisible ? "bg-blue" : ""
          } ${
            mobileMenuVisible ? "fixed" : "absolute"
          } lg:bg-transparent lg:absolute z-50`}
        >
          <nav className="flex items-center px-5 justify-between p-7 lg:justify-around ">
            <Logo />
            <ul className="hidden lg:block">
              <div className="flex gap-8">
                {options.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      href="#"
                      className="text-black text text-[20px]"
                    >
                      {item}
                    </Link>
                  );
                })}
              </div>
            </ul>
            {mobileMenuVisible == true ? (
              <CloseButton close={toggleMobileMenu} />
            ) : (
              <Toggle click={toggleMobileMenu} />
            )}
          </nav>
        </header>

        {/* **********mobile menu************* */}
        <div
          className={`fixed top-[80px] left-0 bottom-0 right-0 h-[90vh] bg-blue lg:hidden ${
            mobileMenuVisible ? "block" : "hidden"
          } scroll-auto z-50 `}
        ></div>
      </Wrapper>
    </>
  );
};

export default Header;
