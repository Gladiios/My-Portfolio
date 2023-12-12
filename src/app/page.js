"use client";
import Frame from "@/components/Frame";
import Header from "@/components/Header";
import HomeAboutMe from "@/components/HomeAboutMe";
import Nav from "@/components/Nav";
import Theme from "@/components/Theme";
import "../styles/global.sass";
import Providers from "./Providers";

export default function Home() {
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
        <HomeAboutMe />
      </div>
    </Providers>
  );
}
