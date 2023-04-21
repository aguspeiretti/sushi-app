import React, { useEffect, useState } from "react";
import "./landing.css";
import Presentation from "../Presentation/Presentation";
import Home from "../Home/Home";

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
        <div>
          <Home />
        </div>
      )}
    </>
  );
};

export default Landing;
