import { Linkedin, Github, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <header className="flex items-center justify-between py-8 max-w-4xl mx-auto px-6 animate-in fade-in slide-in-from-left-4 duration-700">
      <div className="text-foreground font-medium transition-all duration-300 hover:scale-105">
        dxego.tech
      </div>
      
      <div className="flex items-center gap-4">
        <a 
          href="https://www.linkedin.com/in/diegoavendanodiz/" 
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="LinkedIn"
        >
          <Linkedin />
        </a>
        <a 
          href="https://github.com/DiegoAvendao" 
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="GitHub"
        >
          <Github />
        </a>
        <button 
          onClick={toggleTheme}
          className="social-icon"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun /> : <Moon />}
        </button>
      </div>
    </header>
  );
};

export default Header;