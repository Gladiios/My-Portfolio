import React from "react";
import data from "../data.json";
import ProjectTitle from "./ProjectTitle";

const { dataProject } = data;

const ProjectComponents = () => {
  return (
    <div className="project-display">
      {dataProject.map((project) => (
        <ProjectTitle key={project.projectTitle} project={project} />
      ))}
    </div>
  );
};

export default ProjectComponents;
