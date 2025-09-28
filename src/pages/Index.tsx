import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Posts from "@/components/Posts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <About />
      <Projects />
      <Experience />
      <Posts />
    </div>
  );
};

export default Index;
