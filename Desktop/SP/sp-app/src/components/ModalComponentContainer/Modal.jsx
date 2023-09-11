import React from "react";
import "./styles.scss";

const Modal = ({ isOpen, closeModal, data }) => {
  if (!isOpen) {
    return null; // Return null to hide the modal if isOpen is false
  }

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <button onClick={closeModal}>Close</button>
        {/* Render the API data here */}
        <div>{data}</div>
      </div>
    </div>
  );
};

export default Modal;
