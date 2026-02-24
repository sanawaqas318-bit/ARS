"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function About() {
  const profileImg = PlaceHolderImages.find((img) => img.id === "profile");

  return (
    <section id="about" className="py-32 bg-background relative border-y border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="flex-1 relative order-2 lg:order-1">
             <div className="relative w-full max-w-md mx-auto aspect-square rounded-full overflow-hidden border-8 border-muted shadow-2xl">
                {profileImg && (
                  <Image 
                    src={profileImg.imageUrl} 
                    alt="Arham" 
                    fill
                    className="object-cover"
                  />
                )}
              </div>
          </div>

          <div className="flex-1 space-y-8 order-1 lg:order-2 text-center lg:text-left">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">About Me</span>
            <h2 className="text-5xl md:text-6xl font-black leading-tight text-foreground">
              Designing Solutions, <br />
              <span className="text-primary">Not Just Visuals</span>
            </h2>
            <p className="text-xl text-foreground/60 leading-relaxed">
              I am a results-oriented developer who believes that great design is about solving problems and creating value. My approach combines technical expertise with a deep understanding of user psychology.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <p className="text-4xl font-black text-primary">50+</p>
                <p className="text-xs font-bold text-foreground/40 uppercase tracking-wider mt-2">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl font-black text-primary">1+</p>
                <p className="text-xs font-bold text-foreground/40 uppercase tracking-wider mt-2">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}