import React from "react";
import blackLogo from "../assets/SP labs_black.svg";
import "./styles.scss";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-main">
      <div className="footer-main__container">
        <div className="footer-main__logo">
          <img src={blackLogo} alt="100 processo" className="logo-img" />
        </div>
        <div className="footer-main__info">
          <div className="footer-content__policy">
            <h5>SP Labs</h5>

            <a href="#">
              <h6>Política de privacidade</h6>
            </a>
          </div>
          <div className="footer-content__services">
            <h5>Sem Processo</h5>
            <a href="#">
              <h6>Site</h6>
            </a>
            <a href="#">
              <h6>Produtos</h6>
            </a>
            <a href="#">
              <h6>Blog</h6>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-greenLine">
        <span></span>
      </div>
      <div className="footer__signature">
        SP Labs {currentYear}. Feito por Arthur Prange{" "}
      </div>
    </div>
  );
}

export default Footer;
