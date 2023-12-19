import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Nav = () => {
  const { t } = useTranslation("common");
  return (
    <nav className="nav" id="nav">
      <ul>
        <Link href="/" className="nav-item">
          <li>Home</li>
        </Link>
        <Link href="/About" className="nav-item">
          <li>{t("nav-about")}</li>
        </Link>
        <Link href="/Project" className="nav-item">
          <li>{t("nav-project")}</li>
        </Link>
        <Link href="/Contact" className="nav-item">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
