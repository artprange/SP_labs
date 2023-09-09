import React from "react";
import logo from "../assets/SP labs_.png";
import "./styles.scss";

function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar-container__image">
        <img src={logo} alt="SPlabs" className="navbar__logo" />
      </div>
      <div className="navbar-container__text">
        <h3>Cases</h3>

        <h3>Contato</h3>
      </div>
    </div>
  );
}

export default NavBar;
