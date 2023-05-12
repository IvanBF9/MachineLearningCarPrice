import React from "react";
import logo from "../assets/logo.png";

const Nav = () => {
  return (
    <div className="z-50 fixed top-0 w-full flex justify-center border-b ">
      <img className="h-28" src={logo} alt="" />
    </div>
  );
};

export default Nav;
