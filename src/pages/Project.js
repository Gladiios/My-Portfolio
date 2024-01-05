import Providers from "../app/Providers";
import "../styles/global.sass";
import Frame from "../components/Frame";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Theme from "../components/Theme";
import React from "react";
import Timeline from "../components/Timeline";
import ProjectDisplay from "../components/ProjectDisplay";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ThemeLanguage from "@/components/ThemeLanguage";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Project() {
  return (
    <Providers>
      <div id="page">
        <AnimatedBackground />
        <ThemeLanguage />
        <Frame />
        <header>
          <Header />
          <Nav />
        </header>
        <Timeline />
        <ProjectDisplay />
      </div>
    </Providers>
  );
}

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  };
}
