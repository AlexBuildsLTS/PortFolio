import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-background text-text">
      <Navbar />
      <main className="px-2 pt-20 sm:px-6 lg:px-24">{children}</main>
      <Footer />
    </div>
  );
};

// Export the Layout component
export default Layout;
