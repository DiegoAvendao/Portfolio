import { ChevronRight, Calendar, Tag } from "lucide-react";

const Posts = () => {
  const posts = [
    {
      title: "How to Type-Safe Environment Variables with React Router 7 (Framework)",
      description: "Learn how to create type-safe environment variables in your React Router 7 application using the @t3-oss/env-core and zod libraries.",
      date: "May 25, 2025",
      category: "Tutorial"
    },
    {
      title: "Add a custom theme to Monaco Editor for React",
      description: "How to add a custom Visual Studio Code theme to Monaco Editor for React and custom snippets.",
      date: "May 31, 2024",
      category: "Tutorial"
    },
    {
      title: "Remix v2 Snippets",
      description: "Collection of useful Remix v2 code snippets for faster development.",
      date: "April 15, 2024",
      category: "Resource"
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '800ms' }}>
      <h2 className="section-heading">Posts</h2>
      
      <div className="space-y-6">
        {posts.map((post, index) => (
          <article 
            key={post.title} 
            className="group cursor-pointer p-4 rounded-lg transition-all duration-300 hover:bg-card/50 animate-in fade-in slide-in-from-left-4 duration-500"
            style={{ animationDelay: `${900 + index * 100}ms` }}
          >
            <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
              {post.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-3 leading-relaxed transition-colors duration-200 group-hover:text-foreground">
              {post.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 transition-all duration-200 hover:scale-105">
                  <Tag className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{post.category}</span>
                </div>
                <div className="flex items-center gap-1 transition-all duration-200 hover:scale-105">
                  <Calendar className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
              </div>
              <a 
                href="#" 
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-all duration-200 text-sm opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0"
              >
                Read more
                <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Posts;