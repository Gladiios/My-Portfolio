import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="nav" id="nav">
      <ul>
        <li>Home</li>
        <Link href="/About">
          <li>About Me</li>
        </Link>
        <li>Project</li>
        <li>Contact</li>
        <li>Credits</li>
      </ul>
    </nav>
  );
};

export default Nav;
