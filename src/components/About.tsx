"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function About() {
  const profileImg = PlaceHolderImages.find((img) => img.id === "profile");

  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 relative">
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <div className="absolute inset-0 border-[3px] border-primary rounded-full animate-[spin_10s_linear_infinite] border-dashed"></div>
              <div className="absolute inset-4 rounded-full overflow-hidden bg-background border-8 border-background shadow-2xl">
                {profileImg && (
                  <Image 
                    src={profileImg.imageUrl} 
                    alt="Arham" 
                    fill 
                    className="object-cover"
                    data-ai-hint="smiling developer"
                  />
                )}
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-xl rotate-12"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary rounded-xl -rotate-12"></div>
            </div>
          </div>

          <div className="flex-1 space-y-8">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">About Me</span>
            <h2 className="font-headline text-4xl md:text-5xl font-black leading-tight">
              Designing Solutions, Not Just Visuals
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a results-oriented developer who believes that great design is about solving problems and creating value. My approach combines technical expertise with a deep understanding of user psychology.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <p className="font-bold">50+ Complete Projects</p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <p className="font-bold">1+ Years of Experience</p>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 h-14 font-bold">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}