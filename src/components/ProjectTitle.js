import Link from "next/link";
import React from "react";

const ProjectTitle = ({ project }) => {
  return (
    // <Link href={`/project/${project.}`}>
    <div className="project-div">
      <h3 className="project-title">{project.projectTitle}</h3>
      <div>
        <p className="project-type">{project.projectType} </p>
        <p className="project-space">/</p>
        <p className="project-date"> {project.date}</p>
      </div>
      <img
        src={project.projectPicture}
        alt={project.projectTitle}
        className="project-image"
      />
    </div>
    // </Link>
  );
};

export default ProjectTitle;
