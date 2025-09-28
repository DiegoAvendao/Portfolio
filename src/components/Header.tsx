import { Linkedin, Github, Sun } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-8 max-w-4xl mx-auto px-6">
      <div className="text-foreground font-medium">
        pheralb.dev
      </div>
      
      <div className="flex items-center gap-4">
        <a 
          href="#" 
          className="social-icon"
          aria-label="LinkedIn"
        >
          <Linkedin />
        </a>
        <a 
          href="#" 
          className="social-icon"
          aria-label="Twitter"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a 
          href="#" 
          className="social-icon"
          aria-label="GitHub"
        >
          <Github />
        </a>
        <button 
          className="social-icon"
          aria-label="Toggle theme"
        >
          <Sun />
        </button>
      </div>
    </header>
  );
};

export default Header;