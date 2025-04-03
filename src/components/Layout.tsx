import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
