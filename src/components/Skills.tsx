
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
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Core Strengths</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl border-2 border-transparent hover:border-primary transition-all duration-300 group shadow-sm hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 bg-primary/20 rounded-lg text-secondary group-hover:bg-primary group-hover:text-foreground transition-colors">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="font-headline font-bold text-lg">{skill.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
