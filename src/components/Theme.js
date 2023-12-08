"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import "../styles/global.sass";

const Theme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className="theme " id="theme">
      <div>
        <input
          className="checkbox-custom"
          type="checkbox"
          id="dark-theme"
          checked={theme === "dark"}
          onChange={() => handleThemeChange("dark")}
        />
        <label htmlFor="dark-theme">Dark</label>
      </div>
      <div>
        <input
          className="checkbox-custom"
          type="checkbox"
          id="light-theme"
          checked={theme === "light"}
          onChange={() => handleThemeChange("light")}
        />
        <label htmlFor="light-theme">Light</label>
      </div>
    </div>
  );
};

export default Theme;
