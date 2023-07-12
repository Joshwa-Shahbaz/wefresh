import React from "react";
import Header from "./header";
import Footer from "./footer";
// Components

const Layout = ({ children }) => {
  return (
    <div className="overflow-hidden relative w-[100%] h-full">
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
