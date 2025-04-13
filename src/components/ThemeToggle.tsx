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
    </button>
  );
};

export default ThemeToggle;
