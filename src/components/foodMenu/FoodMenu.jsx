import React from "react";
import "./foodMenu.css";
import Navbar from "../NavBar/Navbar";
import { data } from "../../productos";
import CardMenu from "../CardMenu/CardMenu";

const FoodMenu = () => {
  console.log(data);
  return (
    <div className="foodContainer">
      <Navbar />
      <div className="search">
        <input type="text" />
      </div>
      <div className="cardMenuContainer">
        {data.map((p) => (
          <CardMenu product={p} />
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
