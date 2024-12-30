import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="dark:text-white w-6 h-6 cursor-pointer hover:text-orangetxt dark:hover:text-orangetxt transition-all ease-in-out duration-600"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <SunIcon className="h-6 w-6 text-yellow-500" />
      ) : (
        <MoonIcon className="h-6 w-6 text-gray-800" />
      )}
    </button>
  );
};

export default ThemeToggle;
