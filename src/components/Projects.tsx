import React from "react";
import { Github, ExternalLink } from "lucide-react";
import EcommerceCarImage from "../assets/ecommerce-car.png";
import NewUiImage from "../assets/New-Ui.png";

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
      title: "Event Management System",
      description:
        "A comprehensive web application for managing events, user roles, and invitations. Features include user management, event scheduling, invitation tracking, and administrative controls.",
      technologies: ["React", "Vite", "Material UI", "JavaScript"],
      githubUrl: "YOUR_GITHUB_URL_HERE", // TODO: Replace with actual GitHub URL
      imageUrl: NewUiImage,
      liveUrl: "YOUR_LIVE_URL_HERE", // TODO: Replace with actual image path
    },
    {
      title: "E-Commerce Car Platform",
      description:
        "Modern e-commerce platform with product management, shopping cart, and secure checkout functionality.",
      technologies: ["TypeScript", "React", "Vite", "Tailwind CSS"],
      githubUrl: "YOUR_GITHUB_URL_HERE", // TODO: Replace with actual GitHub URL
      imageUrl: EcommerceCarImage,
      liveUrl: "YOUR_LIVE_URL_HERE", // TODO: Replace with actual live URL
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
            className="overflow-hidden transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl bg-navy-light"
          >
            <div className="relative overflow-hidden group">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="object-cover w-full transition-transform duration-300 h-60 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold text-slate-lightest">
                {project.title}
              </h3>
              <p className="mb-4 text-slate">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm rounded-full bg-navy-primary text-green"
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
                  className="flex items-center gap-2 text-green hover:text-slate-lightest"
                >
                  <Github size={20} />
                  <span>Code</span>
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green hover:text-slate-lightest"
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
