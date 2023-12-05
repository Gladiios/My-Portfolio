import Image from "next/image";
import React from "react";

const Modal = ({ project, onClose }) => {
  return (
    <div className="layout" onClick={onClose}>
      <div className="modal-container">
        <div className="close-button">
          <button type="button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="project-info">
          <Image
            src={project.banner}
            height={100}
            width={300}
            quality={100}
            alt={project.title + " banner"}
            className="modal-banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
