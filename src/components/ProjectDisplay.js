import Image from "next/image";
import React from "react";

const ProjectDisplay = ({ project }) => {
  // Vérifiez si project n'est pas undefined avant de tenter d'accéder à ses propriétés
  if (!project) {
    return <div>Loading...</div>; // Ou toute autre gestion d'erreur ou de chargement
  }

  return (
    <div className="project-display">
      <div className="content-container">
        <div className="picture-container">
          <img src={project.picture} />
        </div>
        <div className="module-container">
          <div>
            <p>Client</p>
            <p className="project-client module">
              <p>{project.client}</p>
            </p>
          </div>
          <div>
            <p>Presentation</p>
            <p className="project-presentation module">
              {project.presentation}
            </p>
          </div>
          <div>
            <p>Goal</p>
            <p className="project-goal module">{project.goal}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
