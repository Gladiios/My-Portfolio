import Providers from "../app/Providers";
import "../styles/global.sass";
import Frame from "../components/Frame";
import Header from "../components/Header";
import Nav from "../components/Nav";
import React from "react";
import ContactForm from "../components/ContactForm";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ThemeLanguage from "@/components/ThemeLanguage";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Contact() {
  return (
    <Providers>
      <div id="page" className="contact-page">
        <AnimatedBackground />
        <ThemeLanguage />
        <Frame />
        <header>
          <Header />
          <Nav />
        </header>
        <ContactForm />
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
