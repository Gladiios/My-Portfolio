import "../styles/global.sass";
import Frame from "@/components/Frame";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import React from "react";
import Theme from "@/components/Theme";
import AboutMe from "@/components/AboutMe";
import Providers from "@/app/Providers";

const About = () => {
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
        <AboutMe />
      </div>
    </Providers>
  );
};

export default About;
