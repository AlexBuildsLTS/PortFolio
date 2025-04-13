<<<<<<< HEAD
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { darkMode, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all duration-300 transform hover:scale-110"
      aria-label="Toggle Theme"
    >
      {darkMode ? (
        <Sun className="w-5 h-5 text-green" />
      ) : (
        <Moon className="w-5 h-5 text-[#2464C4]" />
      )}
=======
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
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b
    </button>
  );
};

<<<<<<< HEAD
export default ThemeToggle;
=======
export default ThemeToggle;
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b
