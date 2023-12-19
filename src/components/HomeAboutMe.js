import React from "react";
import { useTranslation } from "next-i18next";

const HomeAboutMe = () => {
  const { t } = useTranslation("common");
  return (
    <div className="bottom-right bottom-right-animation" id="home-about-me">
      <div>
        <span className="home-about">{t("homeAbout")}</span>
      </div>
    </div>
  );
};

export default HomeAboutMe;
