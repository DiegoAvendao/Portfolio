const About = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '200ms' }}>
      <div className="max-w-3xl">
        <p className="text-lg text-muted-foreground leading-relaxed transition-all duration-300">
          I'm <span className="text-foreground font-medium bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">Diego</span>, a fullstack web developer from Mexico with 2 years of experience. I’m passionate about design, accessibility, and building high-quality software.
        </p>
      </div>
    </section>
  );
};

export default About;