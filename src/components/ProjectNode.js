import Tippy from "@tippyjs/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import "tippy.js/dist/tippy.css";

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
          <Tippy content={logo.logoName} key={index}>
            <Image
              className="project-skill"
              src={logo.path}
              alt={project.logoSkills}
              width={30}
              height={30}
              style={logoStyle}
            />
          </Tippy>
        ))}
      </div>
    </div>
  );
};

export default ProjectNode;
