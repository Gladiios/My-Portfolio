"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import "../styles/global.sass";
import  {FiMoon} from "react-icons/fi"
import {BsSun} from "react-icons/bs"

const Theme = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <div className="theme" id="theme">
        {theme === "dark" ? (<BsSun size={25} cursor="pointer" onClick={() => setTheme("light")}/>) :  <FiMoon size={25} cursor="pointer" onClick={() => setTheme("dark")}/>  }    
    </div>
  );
};

export default Theme;
