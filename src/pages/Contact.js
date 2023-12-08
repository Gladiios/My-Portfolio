import Providers from "@/app/Providers";
import "../styles/global.sass";
import Frame from "@/components/Frame";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Theme from "@/components/Theme";
import React from "react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
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
      </div>
      <ContactForm />
    </Providers>
  );
};

export default Contact;
