import React from "react";
import Sidebar from "./Sidebar";
import MainHeader from "./MainHeader";

const Layout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full">{children}</div>
      </div>
    </>
  );
};

export default Layout;
