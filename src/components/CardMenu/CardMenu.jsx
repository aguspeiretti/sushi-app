import React from "react";
import "./cardMenu.css";
import { BsChevronRight } from "react-icons/bs";

const CardMenu = ({ product }) => {
  return (
    <div className="cardMenu-container">
      <div className="cardMenu-contenido">
        <div className="cardMenu-img">
          <img src={product.img} alt="img" />
        </div>
        <div className="cardMenu-info">
          <p>Roll: {product.name}</p>
          <p> Type: {product.type}</p>
          <p className="orange">Price $: {product.price}</p>
        </div>
        <div className="arrow">
          <BsChevronRight size={"28px"} color={"white"} />
        </div>
      </div>
    </div>
  );
};

export default CardMenu;
