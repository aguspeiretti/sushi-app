import React, { useState } from "react";
import "./productPage.css";
import Navbar from "../NavBar/Navbar";
import { useParams } from "react-router";
import { data } from "../../productos";
import { BsChevronLeft } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { IoFishOutline } from "react-icons/io5";
import { Link, unstable_HistoryRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const { name } = useParams();
  const productoElegido = data.find((p) => p.name === name);
  const [fav, setFav] = useState(false);

  const handleFavs = () => {
    setFav(!fav);
  };
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="productPageContainer">
      <Navbar />

      <div className="imgContainer">
        <div className="nameContainer">
          {" "}
          <span onClick={handleBackClick} className="backArrow">
            {" "}
            <BsChevronLeft />{" "}
          </span>
          <div className="nameType">
            <p>{productoElegido.name}</p>
            <p>{productoElegido.type}</p>
          </div>
          <div onClick={handleFavs} className="favs">
            {fav ? <AiFillHeart /> : <AiOutlineHeart />}
          </div>
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
                  Salmon
                </li>
                <li>
                  <span>
                    <IoFishOutline />
                  </span>
                  Kanicama
                </li>
                <li>
                  <span>
                    <IoFishOutline />
                  </span>
                  Palta
                </li>
                <li>
                  <span>
                    <IoFishOutline />
                  </span>
                  Nori
                </li>
                <p>${productoElegido.price}</p>

                <button className="buyButton">Comprar</button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
