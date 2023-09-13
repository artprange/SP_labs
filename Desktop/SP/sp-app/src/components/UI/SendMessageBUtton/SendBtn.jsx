import React from "react";
import "./styles.scss";

const SendBtn = ({ onClick }) => {
  return <button className="send-btn" type="button" onClick={onClick}></button>;
};

export default SendBtn;
