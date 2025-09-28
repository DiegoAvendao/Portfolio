import { ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      period: "2024 - Present",
      title: "Frontend Developer",
      company: "Ferag/THWS",
      description: "Led frontend development of logistics and warehouse management solutions at THWS in cooperation with Ferag, a Swiss leader in material handling systems. I re-platformed a desktop application into a modern Angular 18 web app, implementing role-based authentication, building modular dashboard components, integrating REST APIs, and creating interactive data visualizations with ngx-graph."
    },
    {
      period: "2020 - 2022",
      title: "Frontend Developer",
      company: "Tech Solutions Inc",
      description: "Focused on creating responsive web applications using React, TypeScript, and modern CSS frameworks. Collaborated with design teams to implement pixel-perfect interfaces and optimized application performance resulting in 40% faster load times."
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '600ms' }}>
      <h2 className="section-heading">Experience</h2>
      
      <div className="relative">
        <div className="experience-line"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative animate-in fade-in slide-in-from-left-4 duration-500" style={{ animationDelay: `${700 + index * 200}ms` }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="experience-dot"></div>
                <span className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground">
                  {exp.period}
                </span>
              </div>
              
              <div className="ml-5">
                <h3 className="text-lg font-medium text-foreground mb-2 transition-colors duration-200 hover:text-primary">
                  {exp.title}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-muted-foreground transition-colors duration-200 hover:text-foreground">
                    {exp.company}
                  </span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground transition-all duration-200 hover:text-foreground hover:scale-110" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed transition-colors duration-200 hover:text-foreground">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;