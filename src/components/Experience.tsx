import { ExternalLink } from "lucide-react";

const Experience = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 mb-20">
      <h2 className="section-heading">Experience</h2>
      
      <div className="space-y-8">
        <div className="relative">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
            <span className="text-sm text-muted-foreground">2022 - Present</span>
          </div>
          
          <div className="ml-5">
            <h3 className="text-lg font-medium text-foreground mb-2">
              Software Developer
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-muted-foreground">ATM Grupo Maggioli</span>
              <ExternalLink className="w-3 h-3 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Development solutions for public administration using advanced technologies. In my role, I have improved development agility 
              by implementing modern techniques, creating Typescript libraries for sharing utilities across projects, writing documentation 
              and upgrading outdated projects to new technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;