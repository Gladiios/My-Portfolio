import React from "react";

const ProjectTitle = ({ project }) => {
  return (
    <div className="project-div">
      <h3 className="project-title">{project.projectTitle}</h3>
      <div>
        <p className="project-type">{project.projectType} </p>
        <p className="project-space">/</p>
        <p className="project-date"> {project.date}</p>
      </div>
    </div>
  );
};

export default ProjectTitle;
