import React from "react";
import "./styles.scss";

const LargeBtn = ({ text }) => {
  return (
    <button className="large-button" type="submit">
      {text}
    </button>
  );
};

export default LargeBtn;
