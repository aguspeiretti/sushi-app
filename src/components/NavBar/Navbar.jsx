import React, { useState } from "react";
import "./navBar.css";
import { BiAlignLeft } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

import logo from "../../assets/sushilogo.png";
import { FaTimes } from "react-icons/fa";
import Menu from "../Menu/Menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navBar-container">
      <div onClick={toggle} className="bars-menu">
        {/* <BiAlignLeft size={"22px"} /> */}
        {isOpen ? <FaTimes /> : <BiAlignLeft size={"22px"} />}
      </div>

      <Menu isOpen={isOpen} />

      <div className="logo-container">
        <img src={logo} alt="" />
        <span>Sushiapp</span>
      </div>

      <div className="sales">
        <AiOutlineShoppingCart size={"22px"} />
      </div>
    </div>
  );
}
