import React from "react";
import "./productPage.css";
import Navbar from "../NavBar/Navbar";
import { useParams } from "react-router";
import { data } from "../../productos";
import { BsChevronLeft } from "react-icons/bs";
import { IoFishOutline } from "react-icons/io5";

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
            <div>
              <ul>
                <li>
                  <span>
                    <IoFishOutline />
                  </span>
                  Queso crema
                </li>
                <li>
                  <span>
                    <IoFishOutline />
                  </span>
                </li>
                <li>
                  <span>
                    <IoFishOutline />
                  </span>
                </li>
                <li>
                  <span>
                    <IoFishOutline />
                  </span>
                </li>
                <li>
                  <span>
                    <IoFishOutline />
                  </span>
                </li>
              </ul>
              <p></p>
              <button>hola</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
