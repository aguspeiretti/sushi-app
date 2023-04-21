import React from "react";
import "./cards.css";

export default function Cards({ product }) {
  return (
    <div className="card-container">
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
    </div>
  );
}
