import React from "react";
import Link from "next/link";
import { useRouter } from "next/router"; // Importez useRouter
import { useTranslation } from "next-i18next";

const Nav = () => {
  const { t } = useTranslation("common");
  const router = useRouter(); // Utilisez useRouter pour obtenir le chemin actuel

  const isActive = (path) => {
    return router.pathname === path;
  };

  return (
    <nav className="nav" id="nav">
      <ul>
        <Link href="/" className="nav-item">
          <li className={isActive("/") ? "active" : ""}>Home</li>
        </Link>
        <Link href="/About" className="nav-item">
          <li className={isActive("/About") ? "active" : ""}>
            {t("nav-about")}
          </li>
        </Link>
        <Link href="/Project" className="nav-item">
          <li className={isActive("/Project") ? "active" : ""}>
            {t("nav-project")}
          </li>
        </Link>
        <Link href="/Contact" className="nav-item">
          <li className={isActive("/Contact") ? "active" : ""}>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
