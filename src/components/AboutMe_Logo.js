import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const AboutMe_Logo = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const logoStyle = isDarkTheme ? { filter: "invert(100%)" } : {};
  return (
    <div className="logo-div">
      <Image
        className="tooltip"
        src="/assets/logo/bash.svg"
        alt="logo bash"
        width={30}
        height={30}
        style={logoStyle}
      ></Image>
      <Image
        className="tooltip"
        src="/assets/logo/css.svg"
        alt="logo css"
        width={30}
        height={30}
        style={logoStyle}
      ></Image>
      <Image
        className="tooltip"
        src="/assets/logo/figma.svg"
        alt="logo figma"
        width={30}
        height={30}
        style={logoStyle}
      ></Image>
      <Image
        className="tooltip"
        src="/assets/logo/git.svg"
        alt="logo git"
        width={30}
        height={30}
        style={logoStyle}
      ></Image>
      <Image
        className="tooltip"
        src="/assets/logo/html.svg"
        alt="logo html"
        width={30}
        height={30}
        style={logoStyle}
      ></Image>
      <Image
        className="tooltip"
        src="/assets/logo/javascript.svg"
        alt="logo javascript"
        width={30}
        height={30}
        style={logoStyle}
      ></Image>
      <Image
        className="tooltip"
        src="/assets/logo/next.svg"
        alt="logo nextjs"
        width={30}
        height={30}
        style={logoStyle}
      ></Image>
      <Image
        className="tooltip"
        src="/assets/logo/react.svg"
        alt="logo react"
        width={30}
        height={30}
        style={logoStyle}
      ></Image>
      <Image
        className="tooltip"
        src="/assets/logo/redux.svg"
        alt="logo redux"
        width={30}
        height={30}
        style={logoStyle}
      ></Image>
      <Image
        className="tooltip"
        src="/assets/logo/sass.svg"
        alt="logo sass"
        width={30}
        height={30}
        style={logoStyle}
      ></Image>
    </div>
  );
};

export default AboutMe_Logo;
