"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Portfolio() {
  const projects = [
    {
      id: "project-as",
      title: "AS – Expense Noting Website",
      desc: "A website for noting and managing expenses with ease.",
      link: "https://jazzy-centaur-ad4214.netlify.app/",
      tags: ["React", "Finance"]
    },
    {
      id: "project-ns",
      title: "NS – Fashion Website",
      desc: "A fashion-related website designed for style and elegance.",
      link: "https://ubiquitous-chimera-29c84e.netlify.app/",
      tags: ["Next.js", "Fashion"]
    },
    {
      id: "project-ex",
      title: "EX – Exam Center Website",
      desc: "A website for an exam center featuring streamlined portal access.",
      link: "https://3d-space-editor.netlify.app",
      tags: ["Web App", "Education"]
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold uppercase tracking-widest text-[10px] rounded-full mb-6">Showcase</span>
          <h2 className="font-headline text-5xl md:text-6xl font-black mb-6 text-foreground">Featured Projects</h2>
          <p className="text-foreground/50 max-w-xl mx-auto text-lg">
            A selection of my best work, blending clean design with functional excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project) => {
            const imgData = PlaceHolderImages.find((img) => img.id === project.id);
            return (
              <div 
                key={project.id} 
                className="group relative bg-card rounded-[2rem] overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:translate-y-[-12px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  {imgData && (
                    <Image 
                      src={imgData.imageUrl} 
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-8 space-y-4">
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-black uppercase tracking-wider text-primary bg-primary/5 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="font-headline text-2xl font-black text-foreground">{project.title}</h3>
                  <p className="text-sm text-foreground/50 leading-relaxed min-h-[40px]">
                    {project.desc}
                  </p>
                  
                  <div className="pt-4">
                    <Button 
                      asChild
                      className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-black transition-all shadow-lg shadow-primary/20"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}