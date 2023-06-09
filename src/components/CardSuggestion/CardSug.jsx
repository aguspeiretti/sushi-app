import React from "react";
import "./cardSug.css";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const CardSug = ({ product }) => {
  return (
    <div className="cardSug-container">
      <Link to={`/producto/${product.name}`}>
        <div className="cardSug-contenido">
          <div className="cardSug-img">
            <img src={product.img} alt="img" />
          </div>
          <div className="cardSug-info">
            <p>Roll: {product.name}</p>
            <p> Type: {product.type}</p>
            <p className="orange">Price $: {product.price}</p>
          </div>
          <div className="arrow">
            <BsChevronRight size={"28px"} color={"white"} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardSug;
