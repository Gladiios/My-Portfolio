import Providers from "../app/Providers";
import "../styles/global.sass";
import Frame from "../components/Frame";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Theme from "../components/Theme";
import React from "react";
import ContactForm from "../components/ContactForm";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Contact() {
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
