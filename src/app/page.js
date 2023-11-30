import "../styles/global.sass";
import Header from "@/components/Header";
import HomeAboutMe from "@/components/HomeAboutMe";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div id="page">
      <div id="background"></div>
      <div className="frame" id="frame">
        <div className="frame_line frame_line-top"></div>
        <div className="frame_line frame_line-left"></div>
        <div className="frame_line frame_line-right"></div>
        <div className="frame_line frame_line-bottom"></div>
      </div>
      <header>
        <Header />
        <Nav />
      </header>
      <HomeAboutMe />
    </div>
  );
}
