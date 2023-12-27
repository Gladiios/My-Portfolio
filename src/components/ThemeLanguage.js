import React from "react";
import Theme from "./Theme";
import LanguageSwitcher from "./LanguageSwitcher";

const ThemeLanguage = () => {
  return (
    <div className="theme-language">
      <div className="theme-language-top">
        <Theme />
      </div>
      <div className="theme-language-bottom">
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default ThemeLanguage;
