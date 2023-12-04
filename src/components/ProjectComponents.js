import React from "react";
import data from "../data.json";
import ProjectTitle from "./ProjectTitle";

const { dataProject } = data;

const ProjectComponents = ({ displayModal }) => {
  return (
    <div className="project-display">
      {dataProject.map((project) => (
        <ProjectTitle
          key={project.title}
          project={project}
          displayModal={() => displayModal(project)}
        />
      ))}
    </div>
  );
};

export default ProjectComponents;
