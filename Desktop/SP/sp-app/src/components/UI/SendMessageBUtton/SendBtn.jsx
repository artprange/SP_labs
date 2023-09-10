import React from "react";
import "./styles.scss";
import stdArrow from "../../assets/send-btn__default.svg";

const SendBtn = ({ onClick }) => {
  return (
    <button className="send-btn" type="button" onClick={onClick}>
      <img src={stdArrow} alt="enviar" className="arrow" />
    </button>
  );
};

export default SendBtn;
