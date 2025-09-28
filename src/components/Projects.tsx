import ProjectCard from "./ProjectCard";
import { ChevronRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: "🏭",
      title: "Ferag",
      description: "Ferag logistics application",
      technologies: ["TypeScript", "Angular", "CSS"],
      githubUrl: " https://avt.thws.education",
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
    <section className="max-w-4xl mx-auto px-6 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '400ms' }}>
      <div className="flex items-center justify-between mb-8">
        <h2 className="section-heading font-semibold">Projects</h2>
        
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 stagger-animation">
        {projects.map((project, index) => (
          <div key={project.title} style={{ '--stagger': index } as React.CSSProperties}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;