import React from "react";
import data from "../data.json";
import ProjectTitle from "./ProjectTitle";

const { dataProject } = data;

const ProjectComponents = ({ displayModal }) => {
  return (
    <div className="project-display">
      {dataProject.map((project, index) => (
        <ProjectTitle
          key={project.title}
          project={project}
          displayModal={() => displayModal(project)}
          style={{
            animationDelay: `${1.1 + 0.2 * index}s`, // 1.1s pour le premier élément, puis  0.2s pour chaque élément suivant
          }}
        />
      ))}
    </div>
  );
};

export default ProjectComponents;
