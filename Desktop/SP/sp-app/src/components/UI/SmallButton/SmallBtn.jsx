import React from "react";
import "./styles.scss";
import arrow from "../../assets/arrow-right.svg";

const SmallBtn = ({ text }) => {
  return (
    <button className="small-btn" type="button">
      {text}
      <img src={arrow} alt="arrow right" />
    </button>
  );
};

export default SmallBtn;
