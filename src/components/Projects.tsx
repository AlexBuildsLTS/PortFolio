import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import NorthMarket from '../assets/NorthMarket.png';
import NewUiImage from '../assets/New-Ui.png';
import FinanceWebb from '../assets/FinanceWebb.png';
import techMarket from '../assets/techMarket.png';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Event Management System',
      description:
        'A comprehensive web application for managing events, user roles, and invitations. Features include user management, event scheduling, invitation tracking, and administrative controls.',
      technologies: [
        'React',
        'Vite',
        'Material UI (MUI) ',
        'JavaScript (ES6+) ',
      ],
      githubUrl: 'https://github.com/AlexBuildsLTS/ReserveFrontend-main',
      imageUrl: NewUiImage,
      liveUrl: 'https://sigma-e38fa.web.app/',
    },
    {
      title: 'E-Commerce NorthMarket',
      description:
        'Modern e-commerce platform with product management, shopping cart, and secure checkout functionality.',
      technologies: ['React', 'Vite', 'Material UI (MUI) ', 'JavaScript (ES6+), Node.js, Firebase, FireStore'],
      githubUrl: 'https://github.com/AlexBuildsLTS/Ecommerce',
      imageUrl: NorthMarket,
      liveUrl: 'https://northmarketx.web.app/',
    },
    {
      title: 'Financial Management System',
      description:
        'Modern Financial Management System with user authentication, expense tracking, and financial insights.',
      technologies: ['React', 'Vite', 'Material UI (MUI) ', 'JavaScript (ES6+), Node.js, Firebase, FireStore'],
      githubUrl: 'https://github.com/AlexBuildsLTS/Finance-app',
      imageUrl: FinanceWebb,
      liveUrl: 'finance-webb.web.app',
    },
    {
      title: 'RangerTech',
      description:
        'Simple Tech website for buying and selling laptops',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/AlexBuildsLTS/LaptopMarket-g51',
      imageUrl: techMarket,
      liveUrl: 'https://alexbuildslts.github.io/LaptopMarket-g51/',
    },
    // Add more projects as needed

  ];

  return (
    <section id="projects" className="py-24">
      <h2 className="section-heading">Featured Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="overflow-hidden transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl bg-primary"
          >
            <div className="relative overflow-hidden group">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="object-cover w-full transition-transform duration-300 h-60 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold text-text">
                {project.title}
              </h3>
              <p className="mb-4 text-text">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm rounded-full bg-background text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:text-text"
                >
                  <Github size={20} />
                  <span>Code</span>
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-text"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
