import React, { useState } from "react";
import ProjectNode from "./ProjectNode";
import data from "../data.json";

const { dataProject } = data;
const Timeline = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleNodeClick = (project) => {
    setSelectedProject(project.title);
  };
  const reversedDataProject = [...data.dataProject].reverse();

  return (
    <div className="timeline-container">
      <div className="timeline">
        <p className="timeline-year top-year">2024</p>
        {reversedDataProject.map((project, index) => (
          <ProjectNode
            key={project.title}
            project={project}
            isSelected={project.title === selectedProject}
            onNodeClick={() => handleNodeClick(project)}
            index={index}
          />
        ))}
        <p className="timeline-year bottom-year">2023</p>
      </div>
    </div>
  );
};

export default Timeline;
