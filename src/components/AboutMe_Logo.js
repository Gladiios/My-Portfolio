import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const AboutMe_Logo = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const logoStyle = isDarkTheme ? { filter: "invert(100%)" } : {};
  return (
    <div className="logo-div">
      <div className="tooltip">
        <Image
          src="/assets/logo/css.svg"
          alt="logo css"
          width={30}
          height={30}
          style={logoStyle}
        ></Image>
        <span className="tooltiptext">CSS3</span>
      </div>
      <div className="tooltip">
        <Image
          src="/assets/logo/figma.svg"
          alt="logo figma"
          width={30}
          height={30}
          style={logoStyle}
        ></Image>
        <span className="tooltiptext">Figma</span>
      </div>
      <div className="tooltip">
        <Image
          src="/assets/logo/git.svg"
          alt="logo git"
          width={30}
          height={30}
          style={logoStyle}
        ></Image>
        <span className="tooltiptext">Git</span>
      </div>
      <div className="tooltip">
        <Image
          src="/assets/logo/html.svg"
          alt="logo html"
          width={30}
          height={30}
          style={logoStyle}
        ></Image>
        <span className="tooltiptext">HTML5</span>
      </div>
      <div className="tooltip">
        <Image
          src="/assets/logo/javascript.svg"
          alt="logo javascript"
          width={30}
          height={30}
          style={logoStyle}
        ></Image>
        <span className="tooltiptext">Javascript</span>
      </div>
      <div className="tooltip">
        <Image
          src="/assets/logo/next.svg"
          alt="logo nextjs"
          width={30}
          height={30}
          style={logoStyle}
        ></Image>
        <span className="tooltiptext">Next.js</span>
      </div>
      <div className="tooltip">
        <Image
          src="/assets/logo/react.svg"
          alt="logo react"
          width={30}
          height={30}
          style={logoStyle}
        ></Image>
        <span className="tooltiptext">React</span>
      </div>
      <div className="tooltip">
        <Image
          src="/assets/logo/redux.svg"
          alt="logo redux"
          width={30}
          height={30}
          style={logoStyle}
        ></Image>
        <span className="tooltiptext">Redux</span>
      </div>
      <div className="tooltip">
        <Image
          src="/assets/logo/sass.svg"
          alt="logo sass"
          width={30}
          height={30}
          style={logoStyle}
        ></Image>
        <span className="tooltiptext">Sass</span>
      </div>
      <div className="tooltip">
        <Image
          src="/assets/logo/nodejs.svg"
          alt="logo sass"
          width={30}
          height={30}
          style={logoStyle}
        ></Image>
        <span className="tooltiptext">Node.js</span>
      </div>
      <div className="tooltip">
        <Image
          src="/assets/logo/mongodb.svg"
          alt="logo sass"
          width={30}
          height={30}
          style={logoStyle}
        ></Image>
        <span className="tooltiptext">MongoDB</span>
      </div>
    </div>
  );
};

export default AboutMe_Logo;
