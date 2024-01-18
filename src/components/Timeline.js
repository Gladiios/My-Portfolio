import React, { useState } from "react";
import ProjectNode from "./ProjectNode";
import data from "../data.json";
import ProjectDisplay from "./ProjectDisplay";

const { dataProject } = data;
const Timeline = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const selectedProjectData = dataProject.find(
    (project) => project.title === selectedProject
  );

  const handleNodeClick = (project) => {
    setSelectedProject(project.title);

    const removeProjectOutAnimation = document.querySelectorAll(
      ".project-out-animation, .header-in, .frame_top_left, .frame_bottom_right"
    );

    removeProjectOutAnimation.forEach((el) => {
      if (el.classList.contains("project-out-animation")) {
        el.classList.remove("project-out-animation");
      }
      if (el.classList.contains("header-in")) {
        el.classList.remove("header-in");
      }
      if (el.classList.contains("frame_top_left")) {
        el.classList.remove("frame_top_left");
      }
      if (el.classList.contains("frame_bottom_right")) {
        el.classList.remove("frame_bottom_right");
      }
    });

    document.querySelector(".animated-bg").classList.add("animated-bg-none");

    const leftOutAnimation = document.querySelectorAll(
      "header, .frame_line-top, .frame_line-left, .theme-language"
    );
    leftOutAnimation.forEach((el) => {
      el.classList.add("frame_top_left-none");
    });
    //
    const rightOutAnimation = document.querySelectorAll(
      ".frame_line-right , .frame_line-bottom"
    );
    rightOutAnimation.forEach((el) => {
      el.classList.add("frame_bottom_right-none");
    });
    document.querySelector(".timeline").classList.add("slide-out");
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
      {selectedProjectData && <ProjectDisplay project={selectedProjectData} />}
    </div>
  );
};

export default Timeline;
