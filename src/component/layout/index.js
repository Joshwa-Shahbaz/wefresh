import React from "react";
import Header from "./header";
// Components

const Layout = ({ children }) => {
  return (
    <div className="overflow-hidden relative w-[100%] h-full">
      <Header />
      <main className="min-h-screen">{children}</main>
      {/* <Footer footer={data.footer} /> */}
    </div>
  );
};

export default Layout;
