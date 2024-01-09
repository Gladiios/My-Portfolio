import { useTheme } from "next-themes";
import React from "react";

const ProjectNode = ({ project, isSelected, onNodeClick, index }) => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const isTextOnRight = index % 2 === 0; // Alternance basée sur l'index

  const logoStyle = isDarkTheme ? { filter: "invert(100%)" } : {};

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
          <div className="project-skill-container" key={index}>
            <div className="tooltip">
              <img
                className="project-skill"
                src={logo.path}
                alt={project.logoSkills}
                style={logoStyle}
              />
              <span className="tooltiptext">{logo.logoName}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectNode;
