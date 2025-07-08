import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { Github, Linkedin, Calendar, Menu, X, LogOut } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import profilePicture from '../assets/profilePicture.jpg';
import { useAuth } from '../contexts/AuthContext';
const Navbar: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // remove the '#'
      setTimeout(() => {
        scroller.scrollTo(id, {
          spy: true,
          smooth: true,
          duration: 800,
          offset: -100,
        });
      }, 100); // timeout to wait for page to render
    }
  }, [location]);

  const navItems = [
    { label: 'Home', to: 'home' },
    { label: 'About', to: 'about' },
    { label: 'Experience', to: 'experience' },
    { label: 'Projects', to: 'projects' },
    { label: 'Contact', to: 'contact' },
  ];

  const handleNavClick = (to: string) => {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      scroller.scrollTo(to, {
        spy: true,
        smooth: true,
        duration: 800,
        offset: -100,
      });
    } else {
      navigate('/#' + to);
    }
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 py-4 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-navy-primary/90 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      } lg:px-24`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <RouterLink to="/" className="flex items-center">
            <img
              src={profilePicture}
              alt="Profile"
              className="object-cover transition-transform duration-300 rounded-full w-14 h-14 hover:scale-110"
            />
          </RouterLink>
          {navItems.map((item) => (
            <a
              key={item.label}
              onClick={() => handleNavClick(item.to)}
              className="hidden cursor-pointer md:block nav-link"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/AlexBuildsLTS"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 text-green hover:text-slate-lightest"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/alex-youssef-02512a335/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 text-green hover:text-slate-lightest"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          <RouterLink
            to="/calendar"
            className="p-2 transition-colors duration-300 text-green hover:text-slate-lightest"
          >
            <Calendar size={24} />
          </RouterLink>
          <ThemeToggle />
          {currentUser ? (
            <button
              onClick={logout}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold btn-primary"
            >
              <LogOut size={16} />
              <span>Log Out</span>
            </button>
          ) : (
            <RouterLink
              to="/login"
              className="px-4 py-2 text-sm font-semibold btn-primary"
            >
              <span>Log In</span>
            </RouterLink>
          )}
        </div>

        <button
          className="transition-colors duration-300 text-green md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 w-full py-4 md:hidden top-full bg-white/90 dark:bg-navy-light/90 backdrop-blur-sm animate-fade-in">
          {navItems.map((item) => (
            <a
              key={item.label}
              onClick={() => handleNavClick(item.to)}
              className="block px-6 py-2 cursor-pointer nav-link"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
