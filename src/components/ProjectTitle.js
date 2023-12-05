import Image from "next/image";
import React from "react";

const ProjectTitle = ({ project, displayModal }) => {
  return (
    <div className="project-div" onClick={displayModal}>
      <h3 className="project-title">{project.title}</h3>
      <div>
        <p className="project-type">{project.type} </p>
        <p className="project-space">/</p>
        <p className="project-date"> {project.date}</p>
      </div>
      <Image
        src={project.picture}
        alt={project.title + " picture"}
        className="project-image"
        width={500}
        height={200}
        quality={100}
      />
    </div>
  );
};

export default ProjectTitle;
