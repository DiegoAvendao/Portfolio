import { Github, ExternalLink } from "lucide-react";
import { useRef, MouseEvent } from "react";

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
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    cardRef.current.style.setProperty('--mouse-x', `${x}%`);
    cardRef.current.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <div 
      ref={cardRef}
      className="project-card group relative cursor-pointer"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
           style={{
             background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.1) 0%, transparent 50%)`
           }}
      />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-xl transform transition-transform duration-200 group-hover:scale-110">{icon}</span>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1" />
            </div>
            {updated && (
              <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded animate-pulse">
                Ongoing
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            {githubUrl && (
              <a 
                href={githubUrl} 
                className="text-muted-foreground hover:text-foreground transition-all duration-200 transform hover:scale-110"
                aria-label="View on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed transition-colors duration-200 group-hover:text-foreground">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={tech} 
              className="tech-badge"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;