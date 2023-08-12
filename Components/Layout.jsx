import React from "react";
import {Footer, Header} from "./page";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  );
};

export default Layout;
