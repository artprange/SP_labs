import React from "react";
import LargeBtn from "../UI/LargeButton/LargeBtn";
import NavBar from "../NavBarContainer/NavBar";
import "./styles.scss";

function Hero() {
  return (
    <div className="hero-container">
      <NavBar />
      <div className="hero-container__text">
        <h1>
          Imagine, crie,<br></br> implemente e{" "}
          <span className="evolua-text">evolua</span>
        </h1>
        <h5>Porque não basta resolver os conflitos do mundo do direito.</h5>
        <LargeBtn text={"Inicie sua jornada"} />
      </div>
    </div>
  );
}

export default Hero;
