import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Technologies from "@/components/Technologies";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <About />
      <Projects />
      <Experience />
      <Technologies />
    </div>
  );
};

export default Index;
