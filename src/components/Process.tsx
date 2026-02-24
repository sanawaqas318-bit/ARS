"use client";

import { Search, PenTool, TrendingUp } from "lucide-react";

export function Process() {
  const steps = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Business Planning",
      desc: "We research your market and goals to create a solid foundation."
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Design Strategy",
      desc: "Creating pixel-perfect designs that convert and engage."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Grow Your Business",
      desc: "Launching and scaling your product for maximum impact."
    }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Process</span>
          <h2 className="font-headline text-5xl md:text-6xl font-black text-foreground">My Working Process</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto relative">
          {/* Connecting Arrows */}
          <div className="hidden md:block absolute top-1/3 left-1/4 right-1/4 h-px border-t-2 border-dashed border-primary/20 -z-10"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative inline-block mb-10">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center text-primary border-2 border-border group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-xl group-hover:shadow-primary/20">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-black text-xl border-4 border-background">
                  {index + 1}
                </div>
              </div>
              <h3 className="font-headline text-2xl font-black mb-4 text-foreground">{step.title}</h3>
              <p className="text-foreground/40 leading-relaxed px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}