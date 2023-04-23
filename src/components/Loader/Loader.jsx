import React from "react";
import "./loader.css";
import loader from "../../assets/Loader.gif";

const Loader = () => {
  return (
    <div className="loaderContainer">
      <img src={loader} alt="" />
    </div>
  );
};

export default Loader;
