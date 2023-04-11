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
        {data.map((p) => (
          <Cards product={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;
