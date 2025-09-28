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
      updated: true,
      isLiveSite: true
    },
    {
      icon: "💼",
      title: "PickUpYourSeat-Hackathon",
      description: "A beautiful website for booking co-working spaces",
      technologies: ["React", "NextUI", "Tailwind CSS"],
      githubUrl: "https://github.com/Team6-ED7/frontend"
    },
    
    {
      icon: "👩🏻‍💻",
      title: "CV Job Matcher",
      description: "AI project where the user can upload their CV and the system will match them with the best jobs for them",
      technologies: ["React", "shadcn/ui", "Tailwind CSS"],
      githubUrl: "https://github.com/DiegoAvendao",
      updated: true
    },
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