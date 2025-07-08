import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../contexts/ThemeContext'; // Make sure this line is present and correct

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { darkMode } = useTheme();

  return (
    <div className={`${darkMode ? 'dark bg-navy-primary' : 'bg-white'} text-slate`}>
      <Navbar />
      <main className="px-6 pt-20 lg:px-24">{children}</main>
      <Footer />
    </div>
  );
};

// Export the Layout component
export default Layout;
