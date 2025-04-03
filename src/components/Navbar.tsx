import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Github, Linkedin, Calendar, Menu, X } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import profilePicture from "../assets/profilePicture.jpg";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Experience", to: "experience" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
    { label: "About", to: "about" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full px-6 py-4 bg-navy-primary/90 backdrop-blur-sm lg:px-24">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <RouterLink to="/" className="flex items-center">
            <img
              src={profilePicture}
              alt="Profile"
              className="object-cover rounded-full w-14 h-14"
            />
          </RouterLink>
          {navItems.map((item) =>
            location.pathname === "/" ? (
              <ScrollLink
                key={item.label}
                to={item.to}
                smooth
                duration={500}
                className="hidden cursor-pointer md:block nav-link"
              >
                {item.label}
              </ScrollLink>
            ) : (
              <RouterLink
                key={item.label}
                to={`/#${item.to}`}
                className="hidden md:block nav-link"
              >
                {item.label}
              </RouterLink>
            )
          )}
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/AlexBuildsLTS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green hover:text-slate-lightest"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/alex-youssef-02512a335/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green hover:text-slate-lightest"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          <RouterLink
            to="/calendar"
            className="p-2 text-green hover:text-slate-lightest"
          >
            <Calendar size={24} />
          </RouterLink>
          <ThemeToggle />
          <RouterLink
            to="/login"
            className="px-4 py-2 text-sm font-semibold border rounded text-green border-green hover:bg-green hover:text-navy-primary"
          >
            Log In
          </RouterLink>
        </div>

        <button
          className="text-green md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 w-full py-4 md:hidden top-full bg-navy-light">
          {navItems.map((item) =>
            location.pathname === "/" ? (
              <ScrollLink
                key={item.label}
                to={item.to}
                smooth
                duration={500}
                className="block px-6 py-2 cursor-pointer nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </ScrollLink>
            ) : (
              <RouterLink
                key={item.label}
                to={`/#${item.to}`}
                className="block px-6 py-2 nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </RouterLink>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
