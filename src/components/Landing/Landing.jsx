import React, { useEffect, useState } from "react";
import "./landing.css";
import Presentation from "../Presentation/Presentation";
import Home from "../Home/Home";
import FoodMenu from "../foodMenu/FoodMenu";

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
          {/* <Home /> */}
          <FoodMenu />
        </div>
      )}
    </>
  );
};

export default Landing;
