import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="nav" id="nav">
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/About">
          <li>About Me</li>
        </Link>
        <Link href="/Project">
          <li>Project</li>
        </Link>
        <Link href="/Contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
