"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function About() {
  const profileImg = PlaceHolderImages.find((img) => img.id === "profile");

  return (
    <section id="about" className="py-32 bg-card relative overflow-hidden">
      {/* Pattern background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="flex-1 relative order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <div className="absolute -inset-4 border-[2px] border-primary/30 rounded-full border-dashed animate-[spin_15s_linear_infinite]"></div>
              <div className="absolute inset-0 rounded-full overflow-hidden bg-background border-8 border-background shadow-2xl">
                {profileImg && (
                  <Image 
                    src={profileImg.imageUrl} 
                    alt="Arham" 
                    fill 
                    className="object-cover"
                  />
                )}
              </div>
              {/* Floating geometric shapes matching reference style */}
              <div className="absolute top-0 -left-8 w-16 h-16 bg-primary rounded-2xl rotate-45 animate-float opacity-80 shadow-lg shadow-primary/20"></div>
              <div className="absolute bottom-12 -right-8 w-12 h-12 border-4 border-primary rounded-full animate-pulse opacity-60"></div>
            </div>
          </div>

          <div className="flex-1 space-y-10 order-1 lg:order-2">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">About Me</span>
              <h2 className="font-headline text-5xl md:text-6xl font-black leading-[1.1] mb-6">
                Designing Solutions, <br />
                <span className="text-primary">Not Just Visuals</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I am a results-oriented developer who believes that great design is about solving problems and creating value. My approach combines technical expertise with a deep understanding of user psychology.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 group p-4 bg-background/50 rounded-2xl border border-white/5 hover:border-primary/50 transition-all">
                <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-black text-2xl">50+</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Complete Projects</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group p-4 bg-background/50 rounded-2xl border border-white/5 hover:border-primary/50 transition-all">
                <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-black text-2xl">1+</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
