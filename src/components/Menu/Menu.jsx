import React from "react";
import imgPerfil from "../../assets/perfil.jpg";
import { BiHomeAlt2 } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import { BiAlignJustify } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { IoIosExit } from "react-icons/io";
import "./menu.css";

function Menu({ isOpen }) {
  return (
    <div className={`menu ${isOpen ? "active" : ""}`}>
      <div className="userContainer">
        <div className="addFoto">
          <p>+</p>
        </div>
        <div className="profileImageContainer">
          <img src={imgPerfil} alt="imagen de perfil" />
        </div>
        <p>Jane Doe</p>
      </div>
      <div className="menuContainer">
        <ul>
          <li>
            <span>
              <BiHomeAlt2 />
            </span>
            <p>Inicio</p>
          </li>
          <li>
            <span>
              <BiCart />
            </span>
            <p>Mi carrito</p>
          </li>
          <li>
            <span>
              <AiFillHeart />
            </span>
            <p>Favoritos</p>
          </li>
          <li>
            <span>
              <BiDollar />
            </span>
            <p>Menu</p>
          </li>
          <li>
            <span>
              <BiAlignJustify />
            </span>
            <p>Perfil</p>
          </li>
          <li>
            <span>
              <IoIosExit />
            </span>
            <p>Salir</p>
          </li>
        </ul>
      </div>
      <div className="footerMenuContainer">
        <p></p>
      </div>
    </div>
  );
}

export default Menu;
