import React, { useEffect, useState } from "react";
import "./home.css";
import Navbar from "../NavBar/Navbar";
import { data } from "../../productos";
import Cards from "../Cards/Cards";
import promotion from "../../assets/foodImg/promotion.png";
import CardSug from "../CardSuggestion/CardSug";
import { motion } from "framer-motion";

const all = data;
const rolls = data.filter((p) => p.type === "Roll");
const salad = data.filter((p) => p.type === "Salad");
const combo = data.filter((p) => p.type === "Combo");

const Home = () => {
  const [products, setProducts] = useState(all);

  return (
    <div className="homeContainer">
      <div className="navBarHome">
        <Navbar />
      </div>
      <div className="search">
        <input type="text" />
      </div>
      <div className="first-seccion">
        <div className="categorys">
          <button
            onClick={() => {
              setProducts(all);
            }}
            className="category-button special"
          >
            All
          </button>
          <button
            onClick={() => {
              setProducts(rolls);
            }}
            className="category-button"
          >
            Rolls
          </button>
          <button
            onClick={() => {
              setProducts(salad);
            }}
            className="category-button"
          >
            Salads
          </button>
          <button
            onClick={() => {
              setProducts(combo);
            }}
            className="category-button"
          >
            Combos
          </button>
        </div>

        <motion.div className="carrousel">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -960 }}
            className="product-container"
          >
            {products.map((p) => (
              <Cards key={p.name} product={p} />
            ))}
          </motion.div>
        </motion.div>
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
