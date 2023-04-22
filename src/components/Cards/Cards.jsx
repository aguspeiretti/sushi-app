import React from "react";
import "./cards.css";
import { Link } from "react-router-dom";

export default function Cards({ product }) {
  return (
    <div className="card-container">
      <Link to={`/producto/${product.name}`}>
        {" "}
        <div className="contenido">
          <div className="img-product-container">
            <img src={product.img} alt="img" />
          </div>
          <div className="title-product-container">
            <p>{product.name}</p>
            <p>{product.type}</p>
          </div>
          <div className="price-product-container">
            <p>$ {product.price}.00</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
