import React from "react";
import "./navBar.css";
import { BiAlignLeft } from "react-icons/bi";
import { FiZap } from "react-icons/fi";
import logo from "../../assets/sushilogo.png";

export default function Navbar() {
  return (
    <div className="navBar-container">
      <div className="bars-menu">
        <BiAlignLeft size={"22px"} />
      </div>

      <div className="logo-container">
        <img src={logo} alt="" />
        <span>Sushi-App</span>
      </div>

      <div className="sales">
        <FiZap size={"22px"} />
      </div>
    </div>
  );
}
