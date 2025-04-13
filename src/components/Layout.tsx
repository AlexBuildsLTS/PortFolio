<<<<<<< HEAD
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
=======
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <div>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="px-6 pt-20 lg:px-24">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
