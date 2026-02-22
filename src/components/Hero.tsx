
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const profileImg = PlaceHolderImages.find((img) => img.id === "profile");

  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="flex-1 text-center md:text-left animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold bg-primary rounded-full uppercase tracking-wider">
              Available for work
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Arham Waqas
            </h1>
            <h2 className="font-headline text-2xl md:text-3xl font-medium text-muted-foreground mb-8">
              Frontend Website Developer & <span className="text-foreground border-b-4 border-primary">Web Creator</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Passionate about creating modern websites and online stores. 
              Committed to delivering the best possible website experiences for my clients.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-secondary text-foreground rounded-full px-8 h-14 text-base font-semibold transition-all hover:scale-105">
                <Link href="#portfolio">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-base font-semibold border-2 hover:bg-muted transition-all">
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative animate-fade-in-up [animation-delay:200ms]">
            <div className="relative z-10 w-full max-w-md mx-auto aspect-square rounded-3xl overflow-hidden border-8 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              {profileImg && (
                <Image 
                  src={profileImg.imageUrl} 
                  alt={profileImg.description}
                  fill
                  className="object-cover"
                  priority
                  data-ai-hint={profileImg.imageHint}
                />
              )}
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-3xl -z-0 rounded-full scale-110"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
