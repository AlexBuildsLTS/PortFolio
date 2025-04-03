import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="p-2 transition-colors duration-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700"
      aria-label="Toggle Theme"
    >
      {darkMode ?
        <Sun size={20} />
      : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
