import React from "react";
import "../styles/global.sass";

const Theme = () => {
  return (
    <div className="theme" id="theme">
      <div className="theme-light">
        <input type="checkbox" id="theme-light"></input>
        <label htmlFor="theme-light">Light</label>
      </div>
      <div className="theme-dark">
        <input type="checkbox" id="theme-dark"></input>
        <label htmlFor="theme-dark">Dark</label>
      </div>
    </div>
  );
};

export default Theme;
