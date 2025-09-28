import { Github, Globe } from "lucide-react";
import React, { useRef, MouseEvent } from "react";
import { SiReact, SiTypescript, SiNodedotjs, SiAngular, SiTailwindcss, SiPython, SiGit, SiDocker, SiFigma, SiJest, SiNextdotjs, SiSvelte, SiHono, SiUpstash, SiTurborepo, SiRemix, SiTauri, SiPrisma, SiTrpc } from 'react-icons/si';

interface ProjectCardProps {
  icon: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  updated?: boolean;
  isLiveSite?: boolean;
}

const ProjectCard = ({ 
  icon, 
  title, 
  description, 
  technologies, 
  githubUrl, 
  liveUrl,
  updated = false,
  isLiveSite = false
}: ProjectCardProps) => {
  const getTechIcon = (tech: string) => {
    const iconMap: { [key: string]: React.ComponentType<{ className?: string }> | null } = {
      'React': SiReact,
      'TypeScript': SiTypescript,
      'Node.js': SiNodedotjs,
      'Angular': SiAngular,
      'Tailwind CSS': SiTailwindcss,
      'Python': SiPython,
      'Git': SiGit,
      'Docker': SiDocker,
      'Figma': SiFigma,
      'Jest': SiJest,
      'Next.js': SiNextdotjs,
      'Svelte': SiSvelte,
      'Hono': SiHono,
      'Upstash': SiUpstash,
      'Turborepo': SiTurborepo,
      'Remix': SiRemix,
      'Tauri': SiTauri,
      'Prisma': SiPrisma,
      'T3 Stack': SiTrpc,
      'Tipc': SiTrpc,
      'shaden/ui': null,
      'CSS': null
    };
    return iconMap[tech] || null;
  };
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    cardRef.current.style.setProperty('--mouse-x', `${x}%`);
    cardRef.current.style.setProperty('--mouse-y', `${y}%`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    
    // Reset to center position for smooth transition
    cardRef.current.style.setProperty('--mouse-x', '50%');
    cardRef.current.style.setProperty('--mouse-y', '50%');
  };

  return (
    <div 
      ref={cardRef}
      className="project-card group relative cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Radial gradient light effect */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
           style={{
             background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.1) 0%, transparent 50%)`
           }}
      />
      
      {/* Dynamic border light effect */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
           style={{
             background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
               rgba(255,255,255,0.9) 0%, 
               rgba(255,255,255,0.5) 10%, 
               transparent 25%)`,
             mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
             maskComposite: 'xor',
             WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
             WebkitMaskComposite: 'xor',
             padding: '1px'
           }}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-xl transform transition-transform duration-200 group-hover:scale-110">{icon}</span>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
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
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-all duration-200 transform hover:scale-110"
                aria-label={isLiveSite ? "Visit live site" : "View on GitHub"}
              >
                {isLiveSite ? <Globe className="w-4 h-4" /> : <Github className="w-4 h-4" />}
              </a>
            )}
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm mb-3 leading-relaxed transition-colors duration-200 group-hover:text-foreground flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {technologies.map((tech) => {
            const IconComponent = getTechIcon(tech);
            return (
              <span 
                key={tech} 
                className="tech-badge flex items-center gap-1"
              >
                {IconComponent && <IconComponent className="w-3 h-3" />}
                {tech}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;