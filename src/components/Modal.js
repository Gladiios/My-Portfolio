import Providers from "@/app/Providers";
import Image from "next/image";
import React from "react";

const Modal = ({ project, onClose }) => {
  return (
    <Providers>
      <div className="layout">
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
              width={400}
              quality={100}
              alt={project.title + " banner"}
              className="modal-banner"
            />
            <div className="text-align-center modal-margin-top">
              <p className="modal-title">Client :</p>
              <p>{project.client}</p>
              <div className="presentation-goal">
                <div className="presentation modal-margin-top">
                  <p className="modal-title">Presentation :</p>
                  <p>{project.presentation}</p>
                </div>
                <div className="goal modal-margin-top">
                  <p className="modal-title">Goal :</p>
                  <p>{project.goal}</p>
                </div>
              </div>
            </div>
            <div className="skills modal-margin-top modal-margin-bottom">
              {project.skills.map((skill, index) => (
                <div key={index} className="skill">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Providers>
  );
};

export default Modal;
