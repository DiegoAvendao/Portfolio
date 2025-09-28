import ProjectCard from "./ProjectCard";
import { ChevronRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: "🍞",
      title: "toast",
      description: "A beautiful notification library for React.",
      technologies: ["Turborepo", "Next.js", "Tailwind CSS"],
      githubUrl: "#",
      updated: true
    },
    {
      icon: "⚡",
      title: "svgl",
      description: "A beautiful library with SVG logos.",
      technologies: ["Svelte", "Hono", "Upstash", "shaden/ui"],
      githubUrl: "#"
    },
    {
      icon: "⚛️",
      title: "react-symbols",
      description: "✨ Symbols Icons for React.",
      technologies: ["Turborepo", "Remix", "Tailwind CSS"],
      githubUrl: "#"
    },
    {
      icon: "🐌",
      title: "slug",
      description: "🌱 An open-source URL shortener.",
      technologies: ["Next.js", "T3 Stack", "Prisma"],
      githubUrl: "#"
    },
    {
      icon: "🔤",
      title: "typethings",
      description: "⌨️ A modern, minimal markdown editor.",
      technologies: ["Turborepo", "Tauri", "React"],
      githubUrl: "#"
    },
    {
      icon: "⭐",
      title: "project-hackathon",
      description: "🌟 An open-source hackathon management.",
      technologies: ["Next.js", "T3 Stack", "Tipc", "Prisma"],
      githubUrl: "#"
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 mb-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="section-heading">Projects</h2>
        <a 
          href="#" 
          className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-sm"
        >
          More
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;