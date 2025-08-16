import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigation } from "react-router";
import Loader from "./Loader";

const AppUi = () => {
  const loader=useNavigation();
  if(loader.state==="loading") return <Loader/>
  return <>
    <Header/>
    <Outlet/>
    <Footer/>
  </>;
};

export default AppUi;
