import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import AboutMe_Text from "./AboutMe_Text";
import AboutMe_Logo from "./AboutMe_Logo";

const AboutMe = () => {
  return (
    <div className="about-me-bottom-right bottom-right-animation">
      <div className="about-me bottom-right">
        <AboutMe_Text />
        <AboutMe_Logo />
      </div>
    </div>
  );
};

export default AboutMe;
