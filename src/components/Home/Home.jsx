import React from "react";
import "./home.css";
import Navbar from "../NavBar/Navbar";
import { data } from "../../productos";
import Cards from "../Cards/Cards";

const Home = () => {
  return (
    <div className="homeContainer">
      <Navbar />
      <div className="first-seccion">
      <div className="categorys">
        <button className="category-button special">All</button>
        <button className="category-button">Rolls</button>
        <button className="category-button">Salads</button>
        <button className="category-button">recomended</button>
        </div>
        <div className="product-container">
        {data.map((p) => (
          <Cards product={p} />
        ))}
        </div>       
      </div>
    </div>
  );
};

export default Home;
