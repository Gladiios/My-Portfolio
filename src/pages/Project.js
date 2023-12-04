import "../styles/global.sass";
import Frame from "@/components/Frame";
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import Nav from "@/components/Nav";
import ProjectComponents from "@/components/ProjectComponents";
import Theme from "@/components/Theme";
import React, { useState } from "react";

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="page">
      <div id="background"></div>
      <Theme />
      <Frame />
      <header>
        <Header />
        <Nav />
      </header>
      <ProjectComponents displayModal={openModal} />
      {isModalOpen && <Modal project={selectedProject} onClose={closeModal} />}
    </div>
  );
};

export default Project;
