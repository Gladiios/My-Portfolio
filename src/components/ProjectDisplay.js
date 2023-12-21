import React from "react";
import { useTranslation } from "next-i18next";
import ProjectImage from "./ProjectImage";

const ProjectDisplay = ({ project }) => {
  const { t } = useTranslation("common");
  // Vérifiez si project n'est pas undefined avant de tenter d'accéder à ses propriétés
  if (!project) {
    return <div>Loading...</div>; // Ou toute autre gestion d'erreur ou de chargement
  }

  return (
    <div className={`project-display ${project.id}`}>
      <div className="content-container">
        <div className="picture-container">
          <img src={project.background} />
        </div>
        <div className="project-container">
          {project.picture.map((image, index) => (
            <ProjectImage
              key={index}
              picture={image}
              projectTitle={project.title}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
