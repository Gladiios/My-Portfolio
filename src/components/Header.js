import React from "react";
import { useTranslation } from "next-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation("common");
  return (
    <div className="name">
      <h1>
        Erwan <span className="glow">Marie</span>
      </h1>
      <h2>{t("header-h2")}</h2>
      <LanguageSwitcher />
    </div>
  );
};

export default Header;
