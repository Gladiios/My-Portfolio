"use client";
import Frame from "../components/Frame";
import Header from "../components/Header";
import HomeAboutMe from "../components/HomeAboutMe";
import Nav from "../components/Nav";
import Theme from "../components/Theme";
import Providers from "../app/Providers";
import "../styles/global.sass";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ThemeLanguage from "@/components/ThemeLanguage";

export default function Index() {
  return (
    <Providers>
      <div id="page" className="index">
        <div id="background"></div>
        <ThemeLanguage />
        <Frame />
        <header>
          <Header />
          <Nav />
        </header>
        <HomeAboutMe />
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
