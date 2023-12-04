import React from "react";

const Modal = ({ onClose }) => {
  return (
    <div className="layout" onClick={onClose}>
      <div className="modal-container">
        <div className="close-button">
          <button type="button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="project-info"></div>
      </div>
    </div>
  );
};

export default Modal;
