import React from "react";
import "./styles.scss";
import X from "../../components/assets/x.svg";

const Modal = ({ isOpen, closeModal, data }) => {
  if (!isOpen) {
    return null; // Return null to hide the modal if isOpen is false
  }

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <div className="modal-content__btn-container">
          <button onClick={closeModal} className="modal-content__close-btn">
            <img src={X} alt="close" />
          </button>
        </div>

        <div className="modal-content__response">{data}</div>
      </div>
    </div>
  );
};

export default Modal;
