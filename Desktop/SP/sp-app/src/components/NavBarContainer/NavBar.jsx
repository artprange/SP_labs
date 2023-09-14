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
        <a href="#">Cases</a>

        <a href="#">Contato</a>
      </div>
    </div>
  );
}

export default NavBar;
