import Frame from "@/components/Frame";
import "../styles/global.sass";
import Header from "@/components/Header";
import HomeAboutMe from "@/components/HomeAboutMe";
import Nav from "@/components/Nav";
import Theme from "@/components/Theme";

export default function Home() {
  return (
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
  );
}
