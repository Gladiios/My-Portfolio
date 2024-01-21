import "../styles/global.sass";
import Frame from "../components/Frame";
import Header from "../components/Header";
import Nav from "../components/Nav";
import React from "react";
import AboutMe from "../components/AboutMe";
import Providers from "../app/Providers";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ThemeLanguage from "@/components/ThemeLanguage";
import AnimatedBackground from "@/components/AnimatedBackground";
import Head from "next/head";

export default function About() {
  return (
    <Providers>
      <Head>
        <title>Erwan Marie - Web Developer</title>
        <meta
          name="google-site-verification"
          content="LIsFWwggpPVwk8sihUpK3gb8cSRG_buSVr8MD3CTHpU"
        />
        <meta
          name="description"
          content="Front-end developer portfolio, discover my projects here."
        />
      </Head>
      <div id="page" className="about-page">
        <AnimatedBackground />
        <ThemeLanguage />
        <Frame />
        <header>
          <Header />
          <Nav />
        </header>
        <AboutMe />
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
