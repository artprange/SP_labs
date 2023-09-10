import React from "react";
import "./styles.scss";
import expandArrows from "../../assets/expandArrows.svg";

const ExpandBtn = ({ onClick }) => {
  return (
    <button className="expand-btn" type="button" onClick={onClick}>
      Expandir
      <img src={expandArrows} alt="expandir" />
      {onClick}
    </button>
  );
};

export default ExpandBtn;
