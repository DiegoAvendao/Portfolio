import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  icon: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  updated?: boolean;
}

const ProjectCard = ({ 
  icon, 
  title, 
  description, 
  technologies, 
  githubUrl, 
  liveUrl,
  updated = false 
}: ProjectCardProps) => {
  return (
    <div className="project-card group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-xl">{icon}</span>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          {updated && (
            <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">
              updated
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          {githubUrl && (
            <a 
              href={githubUrl} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;