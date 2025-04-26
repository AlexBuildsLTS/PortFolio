import React from 'react';
<<<<<<< HEAD

import { useTheme } from '../contexts/ThemeContext';
import Footer from './Footer';
import Navbar from './Navbar';
=======
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../contexts/ThemeContext';
>>>>>>> 74b7f6236ea99624ffccda761af2768e45c1944f

// Define the interface for the Layout component's props
 interface LayoutProps {
   children: React.ReactNode;
 }
// Define the Layout component
 const Layout: React.FC<LayoutProps> = ({ children }) => {
   // Use the ThemeContext to access darkMode
   const { darkMode } = useTheme();

   return (
     <div className={darkMode ? 'dark' : ''}>
       <Navbar />
       <main className="px-6 pt-20 lg:px-24">{children}</main>
       <Footer />
     </div>
   );
 };

 // Export the Layout component

 export default Layout;

