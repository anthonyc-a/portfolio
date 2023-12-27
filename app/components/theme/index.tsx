"use client";

import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDarkMode);
    const handleChange = (event: MediaQueryListEvent) => setIsDarkMode(event.matches);
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleToggle = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    document.body.classList.toggle("dark", newIsDarkMode);
    if (newIsDarkMode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div onClick={handleToggle}>
      o
    </div>
  );
};

export default ThemeToggle;