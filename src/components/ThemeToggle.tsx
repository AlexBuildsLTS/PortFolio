<<<<<<< HEAD
import { Moon, Sun } from 'lucide-react';
import React from 'react';

=======
import React from 'react';
import { Moon, Sun } from 'lucide-react';
>>>>>>> 74b7f6236ea99624ffccda761af2768e45c1944f
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
