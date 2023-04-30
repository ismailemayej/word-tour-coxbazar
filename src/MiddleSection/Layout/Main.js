import React from "react";
import Header from "../../TopSection/Header/Header";
import { Outlet } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="BlackLayer">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
