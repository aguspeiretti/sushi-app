import React from "react";
import "./presentation.css";
import presentation from "../../assets/presentation.gif";

function Presentation() {
  return (
    <div className="presentationContainer">
      <div className="gifContainer">
        <img src={presentation} alt="presentation" />
      </div>
    </div>
  );
}

export default Presentation;
