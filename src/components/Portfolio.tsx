"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowUpRight } from "lucide-react";

export function Portfolio() {
  const projects = [
    {
      id: "project-restaurant",
      title: "SaaS Landing Page",
      type: "Branding",
      desc: "A modern SaaS landing page designed for conversion and clarity.",
      tags: ["UI/UX", "Next.js"]
    },
    {
      id: "project-course",
      title: "Education Platform",
      type: "Web App",
      desc: "Complete LMS solution with intuitive navigation and course management.",
      tags: ["React", "LMS"]
    },
    {
      id: "project-decor",
      title: "Litigation Mobile App",
      type: "Mobile",
      desc: "Clean and professional mobile interface for legal services.",
      tags: ["Mobile", "Figma"]
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Portfolio</span>
          <h2 className="font-headline text-5xl md:text-6xl font-black mb-6 text-foreground">Digital Product Showcases</h2>
          <div className="w-24 h-2 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {projects.map((project) => {
            const imgData = PlaceHolderImages.find((img) => img.id === project.id);
            return (
              <div key={project.id} className="group relative bg-card rounded-[3rem] overflow-hidden border border-border hover:border-primary/40 transition-all duration-500 hover:translate-y-[-10px] shadow-2xl">
                <div className="relative aspect-[4/5] overflow-hidden">
                  {imgData && (
                    <Image 
                      src={imgData.imageUrl} 
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center backdrop-blur-sm">
                    <div className="p-8 text-center translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-3xl font-black mb-2 text-primary-foreground">{project.title}</h3>
                      <p className="text-sm text-primary-foreground/80 font-bold uppercase mb-8 tracking-widest">{project.type}</p>
                      <button className="w-16 h-16 bg-background text-primary rounded-full flex items-center justify-center mx-auto hover:scale-110 active:scale-95 transition-all shadow-lg shadow-black/10">
                        <ArrowUpRight className="h-8 w-8" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-10 border-t border-border">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-headline text-2xl font-black mb-1 text-foreground">{project.title}</h4>
                      <p className="text-foreground/40 font-bold tracking-tight">{project.type}</p>
                    </div>
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