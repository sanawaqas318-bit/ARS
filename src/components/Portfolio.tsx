
"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ExternalLink } from "lucide-react";

export function Portfolio() {
  const projects = [
    {
      id: "project-restaurant",
      title: "Gourmet Table",
      type: "Restaurant Website",
      desc: "A premium dining experience showcase with menu management and reservation integration.",
      tags: ["Responsive", "Custom UI", "React"]
    },
    {
      id: "project-course",
      title: "EduStream",
      type: "Course Selling Website",
      desc: "Learning platform featuring structured content delivery and seamless user navigation.",
      tags: ["LMS", "Next.js", "Clean Code"]
    },
    {
      id: "project-decor",
      title: "Hygge Home",
      type: "Home Decor Website",
      desc: "Minimalist e-commerce interface designed for home interior enthusiasts and shoppers.",
      tags: ["Ecommerce", "Visual First", "Tailwind"]
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">My Best Work</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => {
            const imgData = PlaceHolderImages.find((img) => img.id === project.id);
            return (
              <div key={project.id} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-primary">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {imgData && (
                    <Image 
                      src={imgData.imageUrl} 
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      data-ai-hint={imgData.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="font-headline font-bold text-xl mb-2">{project.title}</p>
                      <p className="text-sm opacity-90 mb-4">{project.desc}</p>
                      <div className="flex items-center justify-center gap-2 text-primary font-bold">
                        <ExternalLink className="h-5 w-5" /> View Case Study
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-foreground border-none font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="font-headline text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-secondary font-bold text-sm uppercase tracking-wider">{project.type}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
