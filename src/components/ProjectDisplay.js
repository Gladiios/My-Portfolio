import React from "react";
import { useTranslation } from "next-i18next";
import ProjectImage from "./ProjectImage";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import Image from "next/image";
import Tippy from "@tippyjs/react";

const ProjectDisplay = ({ project }) => {
  const { t } = useTranslation("common");
  const handleReturnArrow = () => {
    const projectOutAnimation = document.querySelectorAll(
      `.project-display , .${project.id}`
    );
    const displayMainleft = document.querySelectorAll(
      ".frame_line-top, .frame_line-left"
    );
    const displayMainRight = document.querySelectorAll(
      ".frame_line-right , .frame_line-bottom"
    );
    const clearOutClasslist = document.querySelectorAll(
      "header, .frame_line-top, .frame_line-left, .theme-language,.frame_line-right , .frame_line-bottom"
    );
    projectOutAnimation.forEach((el) => {
      el.classList.add("project-out-animation");
    });

    displayMainleft.forEach((el) => {
      el.classList.add("frame_top_left");
    });

    displayMainRight.forEach((el) => {
      el.classList.add("frame_bottom_right");
    });
    clearOutClasslist.forEach((el) => {
      el.classList.remove("frame_top_left-none");
      el.classList.remove("frame_bottom_right-none");
    });
    document.querySelector(".theme-language").classList.add("theme-in");
    document.querySelector("header").classList.add("header-in");
    document.querySelector(".timeline").classList.remove("slide-out");
    document
      .querySelector(".animated-bg-none")
      .classList.remove("animated-bg-none");
  };

  if (!project) {
    return <div></div>; // Ou toute autre gestion d'erreur ou de chargement
  }

  return (
    <div className={`project-display ${project.id}`}>
      <div className="content-container">
        <div className="picture-container">
          <img src={project.background} />
        </div>
        <div className="bg-2"></div>
        <div
          className="project-title"
          style={{ backgroundColor: project.bgColor }}
        >
          <div className="logo-title-div">
            <Tippy content="Github repository">
              <a href={project.github} target="_blank">
                <FaGithub />
              </a>
            </Tippy>
            <h3>{project.title}</h3>
          </div>
          <div className="return-arrow">
            <FaArrowRight
              className="return-arrow-size"
              onClick={handleReturnArrow}
              cursor={"pointer"}
            />
          </div>
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
