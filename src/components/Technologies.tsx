import React, { useRef, MouseEvent } from "react";
import { SiReact, SiTypescript, SiNodedotjs, SiAngular, SiTailwindcss, SiPython, SiGit, SiDocker, SiFigma, SiJest } from 'react-icons/si';

const Technologies = () => {
  const technologies = [
    { name: "React", icon: SiReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Angular", icon: SiAngular },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Python", icon: SiPython },
    { name: "REST APIs", icon: null },
    { name: "Git", icon: SiGit },
    { name: "Docker", icon: SiDocker },
    { name: "Figma", icon: SiFigma },
    { name: "Jest", icon: SiJest }
  ];

  const TechCard = ({ tech, index }: { tech: { name: string; icon: React.ComponentType<{ className?: string }> | null }; index: number }) => {
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
      
      cardRef.current.style.setProperty('--mouse-x', '50%');
      cardRef.current.style.setProperty('--mouse-y', '50%');
    };

    return (
      <div 
        ref={cardRef}
        className="project-card group relative cursor-pointer h-8 px-2 py-1"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ animationDelay: `${900 + index * 100}ms` }}
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
        
        <div className="relative z-10 flex items-center justify-center h-full gap-1">
          {tech.icon && <tech.icon className="w-3 h-3 text-foreground group-hover:text-primary transition-colors" />}
          <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
            {tech.name}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section className="max-w-4xl mx-auto px-6 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '800ms' }}>
      <h2 className="section-heading">Technologies</h2>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <TechCard key={tech.name} tech={tech} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Technologies;
