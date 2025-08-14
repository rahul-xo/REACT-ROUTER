import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

const AppUi = () => {
  return <>
    <Header/>
    <Outlet/>
    <Footer/>
  </>;
};

export default AppUi;
