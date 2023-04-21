import React from "react";
import "./productPage.css";
import Navbar from "../NavBar/Navbar";
import { useParams } from "react-router";
import { data } from "../../productos";
import { BsChevronLeft } from "react-icons/bs";

const ProductPage = ({ product }) => {
  const { name } = useParams();
  const productoElegido = data.find((p) => p.name === name);

  return (
    <div className="productPageContainer">
      <Navbar />
      <div className="search">
        <input type="text" />
      </div>
      <div className="imgContainer">
        <div className="nameContainer">
          <span>
            {" "}
            <BsChevronLeft />{" "}
          </span>
          <p>{productoElegido.name}</p>
        </div>
        <div className="onliImg">
          <img src={productoElegido.img} alt="" />
        </div>
        <div className="infoContainer">
          <div className="info">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <p></p>
            <button>hola</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
