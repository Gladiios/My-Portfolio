import Providers from "@/app/Providers";
import "../styles/global.sass";
import Frame from "@/components/Frame";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Theme from "@/components/Theme";
import React, { useState } from "react";
import Timeline from "@/components/Timeline";

const Project = () => {
  return (
    <Providers>
      <div id="page">
        <div id="background"></div>
        <Theme />
        <Frame />
        <header>
          <Header />
          <Nav />
        </header>
        <Timeline />
      </div>
    </Providers>
  );
};

export default Project;
