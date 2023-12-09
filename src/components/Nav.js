import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="nav" id="nav">
      <ul>
        <Link href="/" className="nav-item">
          <li>Home</li>
        </Link>
        <Link href="/About" className="nav-item">
          <li>About Me</li>
        </Link>
        <Link href="/Project" className="nav-item">
          <li>Project</li>
        </Link>
        <Link href="/Contact" className="nav-item">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
