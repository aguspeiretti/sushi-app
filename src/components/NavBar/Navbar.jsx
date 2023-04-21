import React, { useState } from "react";
import "./navBar.css";
import { BiAlignLeft } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

import logo from "../../assets/sushilogo.png";
import { FaBars, FaTimes } from "react-icons/fa";

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
      <div className={`menu ${isOpen ? "active" : ""}`}>
        <ul>
          <li>link1</li>
          <li>link2</li>
          <li>link3</li>
        </ul>
      </div>

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
