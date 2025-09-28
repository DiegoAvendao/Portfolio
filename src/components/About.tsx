const About = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '200ms' }}>
      <div className="max-w-3xl">
        <p className="text-lg text-muted-foreground leading-relaxed transition-all duration-300 hover:text-foreground">
          I'm <span className="text-foreground font-medium bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">Pablo</span>, a fullstack web developer from Canary Islands with +3 years of experience. I'm passionate about databases, UI/UX design, and building open-source software.
        </p>
      </div>
    </section>
  );
};

export default About;