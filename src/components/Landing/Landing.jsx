import React, { useEffect, useState } from "react";
import "./landing.css";
import Presentation from "../Presentation/Presentation";
import sushi from "../../assets/sushilogo.png";
import Home from "../Home/Home";
import { Link } from "react-router-dom";

const Landing = () => {
  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    // if (localStorage.getItem("usuarioDondeComemo") !== null) {
    //   window.location = "/Home";
    // }
    setTimeout(() => {
      setAnimation(false);
    }, 3000);

    return () => {};
  }, []);

  return (
    <>
      {animation ? (
        <Presentation />
      ) : (
        <div className="sesionContainer">
          <img src={sushi} alt="" />
          <p className="descriptionLogin">
            Para acceder a las mejores recomendaciones, deberias iniciar sesión
          </p>
          <Link to={"/LogIn"}>
            <button className="landingButton">Iniciar sesión</button>
          </Link>
          <Link to={"/Registro"}>
            <button className="landingButton">Registrarme</button>
          </Link>
          <Link to={"/Home"}>
            <p className="saltar">Saltar este paso</p>{" "}
          </Link>
        </div>
      )}
    </>
  );
};

export default Landing;
