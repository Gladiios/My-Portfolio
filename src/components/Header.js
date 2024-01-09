import React from "react";
import { useTranslation } from "next-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation("common");
  return (
    <div className="name">
      <h1>Erwan Marie</h1>
      <h2>
        <span>{t("header-h2")}</span>
      </h2>
    </div>
  );
};

export default Header;
