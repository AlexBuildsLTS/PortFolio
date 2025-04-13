<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Github, Linkedin, Calendar, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';
import profilePicture from '../assets/profilePicture.jpg';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Experience', to: 'experience' },
    { label: 'Projects', to: 'projects' },
    { label: 'Contact', to: 'contact' },
    { label: 'About', to: 'about' },
  ];

  return (
    <nav className={`fixed top-0 z-50 w-full px-6 py-4 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-navy-primary/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    } lg:px-24`}>
=======
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
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <RouterLink to="/" className="flex items-center">
            <img
              src={profilePicture}
              alt="Profile"
<<<<<<< HEAD
              className="object-cover rounded-full w-14 h-14 transition-transform duration-300 hover:scale-110"
            />
          </RouterLink>
          {navItems.map((item) =>
            location.pathname === '/' ? (
              <ScrollLink
                key={item.label}
                to={item.to}
                spy={true}
                smooth={true}
                duration={800}
                offset={-100}
=======
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
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b
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
<<<<<<< HEAD
            className="text-green hover:text-slate-lightest transition-colors duration-300"
=======
            className="text-green hover:text-slate-lightest"
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/alex-youssef-02512a335/"
            target="_blank"
            rel="noopener noreferrer"
<<<<<<< HEAD
            className="text-green hover:text-slate-lightest transition-colors duration-300"
=======
            className="text-green hover:text-slate-lightest"
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          <RouterLink
            to="/calendar"
<<<<<<< HEAD
            className="p-2 text-green hover:text-slate-lightest transition-colors duration-300"
=======
            className="p-2 text-green hover:text-slate-lightest"
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b
          >
            <Calendar size={24} />
          </RouterLink>
          <ThemeToggle />
          <RouterLink
            to="/login"
<<<<<<< HEAD
            className="px-4 py-2 text-sm font-semibold btn-primary"
          >
            <span>Log In</span>
=======
            className="px-4 py-2 text-sm font-semibold border rounded text-green border-green hover:bg-green hover:text-navy-primary"
          >
            Log In
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b
          </RouterLink>
        </div>

        <button
<<<<<<< HEAD
          className="text-green md:hidden transition-colors duration-300"
=======
          className="text-green md:hidden"
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
<<<<<<< HEAD
        <div className="absolute left-0 w-full py-4 md:hidden top-full bg-white/90 dark:bg-navy-light/90 backdrop-blur-sm animate-fade-in">
          {navItems.map((item) =>
            location.pathname === '/' ? (
              <ScrollLink
                key={item.label}
                to={item.to}
                spy={true}
                smooth={true}
                duration={800}
                offset={-100}
=======
        <div className="absolute left-0 w-full py-4 md:hidden top-full bg-navy-light">
          {navItems.map((item) =>
            location.pathname === "/" ? (
              <ScrollLink
                key={item.label}
                to={item.to}
                smooth
                duration={500}
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b
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

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b
