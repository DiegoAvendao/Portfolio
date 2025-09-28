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
    <section className="max-w-4xl mx-auto px-6 mb-20">
      <h2 className="section-heading">Posts</h2>
      
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.title} className="group cursor-pointer">
            <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
              {post.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Tag className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{post.category}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
              </div>
              <a 
                href="#" 
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-sm opacity-0 group-hover:opacity-100"
              >
                Read more
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Posts;