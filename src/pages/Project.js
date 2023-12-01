import "../styles/global.sass";
import Frame from "@/components/Frame";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Theme from "@/components/Theme";
import React from "react";

const Project = () => {
  return (
    <div id="page">
      <div id="background"></div>
      <Theme />
      <Frame />
      <header>
        <Header />
        <Nav />
      </header>
    </div>
  );
};

export default Project;
