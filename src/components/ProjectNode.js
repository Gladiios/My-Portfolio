import Image from "next/image";
import React from "react";

const ProjectNode = ({ project, isSelected, onNodeClick, index }) => {
  const isTextOnRight = index % 2 === 0; // Alternance basée sur l'index

  return (
    <div className="project-node" onClick={onNodeClick}>
      {isTextOnRight && (
        <div className="project-node-text">
          <p>{project.title}</p>
        </div>
      )}
      <div
        className={`project-node-circle ${isSelected ? "selected" : ""}`}
      ></div>
      {!isTextOnRight && (
        <div className="project-node-text">
          <p>{project.title}</p>
        </div>
      )}
      <div className="project-node-skills">
        {project.logoSkills.map((logo, index) => (
          <img key={index} src={logo} alt={project.logoSkills} />
        ))}
      </div>
    </div>
  );
};

export default ProjectNode;
