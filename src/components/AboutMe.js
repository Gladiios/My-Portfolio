import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="bottom-right">
      <span>
        Since childhood, i spend most of my time in front of a screen,
      </span>
      <span>i also like to learn, create and design.</span>
      <span>That's mostly why after quitting from delivery, i decided to</span>
      <span>learn web development.</span>
      <br></br>
      <span>Currently i'm only able to do front-end development,but</span>
      <span>i intend to learn back-end development in a near future.</span>
      <br></br>
      <span>The Languages and Tools i'm familliar with :</span>
      <div className="logo-div">
        <Image
          className="bash"
          src="/assets/logo/bash.svg"
          alt="logo bash"
          width={30}
          height={30}
        ></Image>
        <Image
          src="/assets/logo/css.svg"
          alt="logo css"
          width={30}
          height={30}
        ></Image>
        <Image
          src="/assets/logo/figma.svg"
          alt="logo figma"
          width={30}
          height={30}
        ></Image>
        <Image
          src="/assets/logo/git.svg"
          alt="logo git"
          width={30}
          height={30}
        ></Image>
        <Image
          src="/assets/logo/html.svg"
          alt="logo html"
          width={30}
          height={30}
        ></Image>
        <Image
          src="/assets/logo/javascript.svg"
          alt="logo javascript"
          width={30}
          height={30}
        ></Image>
        <Image
          src="/assets/logo/next.svg"
          alt="logo nextjs"
          width={30}
          height={30}
        ></Image>
        <Image
          src="/assets/logo/react.svg"
          alt="logo react"
          width={30}
          height={30}
        ></Image>
        <Image
          src="/assets/logo/redux.svg"
          alt="logo redux"
          width={30}
          height={30}
        ></Image>
        <Image
          src="/assets/logo/sass.svg"
          alt="logo sass"
          width={30}
          height={30}
        ></Image>
      </div>
    </div>
  );
};

export default AboutMe;
