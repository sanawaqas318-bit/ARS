"use client";

import { CheckCircle2 } from "lucide-react";

export function Skills() {
  const skills = [
    { title: "Frontend Development", desc: "Crafting interactive experiences" },
    { title: "Responsive Layouts", desc: "Mobile-first, fluid designs" },
    { title: "Clean UI Implementation", desc: "Pixel-perfect visual execution" },
    { title: "Modern Web Interfaces", desc: "Following latest industry trends" },
    { title: "User-Friendly Design", desc: "Intuitive and accessible flows" },
    { title: "E-commerce Solutions", desc: "Building high-converting stores" },
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Core Strengths</span>
          <h2 className="font-headline text-4xl md:text-5xl font-black text-foreground">Skills & Expertise</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-background p-8 rounded-[2rem] border-2 border-transparent hover:border-primary transition-all duration-300 group shadow-lg hover:shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="font-headline font-black text-xl text-foreground">{skill.title}</h3>
              </div>
              <p className="text-foreground/60 leading-relaxed font-medium">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}