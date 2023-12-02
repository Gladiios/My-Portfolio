import "../styles/global.sass";
import Frame from "@/components/Frame";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import React from "react";
import Theme from "@/components/Theme";
import AboutMe from "@/components/AboutMe";

const About = () => {
  return (
    <div id="page">
      <div id="background"></div>
      <Theme />
      <Frame />
      <header>
        <Header />
        <Nav />
      </header>
      <AboutMe />
    </div>
  );
};

export default About;
