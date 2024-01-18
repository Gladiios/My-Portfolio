"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import "../styles/global.sass";
import { FiMoon } from "react-icons/fi";
import { BsSun } from "react-icons/bs";

const Theme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="theme" id="theme" onClick={handleThemeChange}>
      {theme === "dark" ? (
        <BsSun className="icon-size" />
      ) : (
        <FiMoon className="icon-size" />
      )}
    </div>
  );
};

export default Theme;
