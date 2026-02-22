"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Portfolio</span>
          <h2 className="font-headline text-4xl md:text-5xl font-black mb-8">Digital Product Showcases</h2>
          
          <Tabs defaultValue="all" className="w-fit mx-auto">
            <TabsList className="bg-card border border-white/5 rounded-full p-1 h-14">
              <TabsTrigger value="all" className="rounded-full px-8 font-bold data-[state=active]:bg-primary data-[state=active]:text-black">All</TabsTrigger>
              <TabsTrigger value="landing" className="rounded-full px-8 font-bold data-[state=active]:bg-primary data-[state=active]:text-black">Landing Page</TabsTrigger>
              <TabsTrigger value="app" className="rounded-full px-8 font-bold data-[state=active]:bg-primary data-[state=active]:text-black">App Design</TabsTrigger>
              <TabsTrigger value="book" className="rounded-full px-8 font-bold data-[state=active]:bg-primary data-[state=active]:text-black">Book Product</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project) => {
            const imgData = PlaceHolderImages.find((img) => img.id === project.id);
            return (
              <div key={project.id} className="group relative bg-card rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-500">
                <div className="relative aspect-[4/5] overflow-hidden">
                  {imgData && (
                    <Image 
                      src={imgData.imageUrl} 
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      data-ai-hint={imgData.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-8 text-center translate-y-4 group-hover:translate-y-0 transition-transform">
                      <h3 className="text-2xl font-black mb-2">{project.title}</h3>
                      <p className="text-sm text-primary font-bold uppercase mb-6 tracking-widest">{project.type}</p>
                      <button className="w-14 h-14 bg-primary text-black rounded-full flex items-center justify-center mx-auto hover:scale-110 transition-transform">
                        <ArrowUpRight className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-headline text-xl font-bold">{project.title}</h4>
                      <p className="text-muted-foreground text-sm">{project.type}</p>
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