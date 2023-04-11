import React from "react";
import "./home.css";
import Navbar from "../NavBar/Navbar";
import { data } from "../../productos";
import Cards from "../Cards/Cards";
import promotion from "../../assets/foodImg/promotion.png";
import CardSug from "../CardSuggestion/CardSug";

const Home = () => {
  return (
    <div className="homeContainer">
      <Navbar />
      <div className="search">
        <input type="text" />
      </div>
      <div className="first-seccion">
        <div className="categorys">
          <button className="category-button special">All</button>
          <button className="category-button">Rolls</button>
          <button className="category-button">Salads</button>
          <button className="category-button">Recomended</button>
        </div>
        <div className="product-container">
          {data.map((p) => (
            <Cards product={p} />
          ))}
        </div>
      </div>
      <div className="second-seccion">
        <div className="day-sales">
          <p>Day's promotion</p>
          <span>$3000</span>
        </div>
        <div className="promotion-img">
          <img src={promotion} alt="" />
        </div>
      </div>
      <div className="thirt-seccion">
        <div className="suggestion">
          <p>Suggestion for you</p>
        </div>
        <div className="suggested">
          <CardSug product={data.find((e) => e.suggested === true)} />
        </div>
      </div>
    </div>
  );
};

export default Home;
