# Diego's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with dark/light theme support
- 📱 Fully responsive layout
- ⚡ Built with Vite for fast development and builds
- 🎭 Smooth animations and interactive elements
- 🛠️ TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 🧩 Reusable UI components with shadcn/ui

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Client-side routing
- **Lucide React** - Icons
- **React Icons** - Technology icons
- **shadcn/ui** - UI components
- **Radix UI** - Headless UI primitives
- **next-themes** - Theme management

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd diego-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── ProjectCard.tsx # Individual project card
│   ├── Experience.tsx  # Work experience
│   └── Technologies.tsx # Technologies section
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── main.tsx           # App entry point
```

## Customization

### Adding New Projects

Edit the `projects` array in `src/components/Projects.tsx`:

```typescript
const projects = [
  {
    icon: "🚀",
    title: "Your Project",
    description: "Project description",
    technologies: ["React", "TypeScript"],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://yourproject.com"
  }
];
```

### Adding New Experience

Edit the `experiences` array in `src/components/Experience.tsx`:

```typescript
const experiences = [
  {
    period: "2024 - Present",
    title: "Your Role",
    company: "Your Company",
    description: "Your experience description"
  }
];
```

### Adding New Technologies

Edit the `technologies` array in `src/components/Technologies.tsx`:

```typescript
const technologies = [
  { name: "Your Technology", icon: YourIconComponent },
  { name: "Another Tech", icon: null }
];
```

## Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

## License

This project is open source and available under the [MIT License](LICENSE).

