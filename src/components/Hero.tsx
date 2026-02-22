
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  const profileImg = PlaceHolderImages.find((img) => img.id === "profile");

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
      {/* Decorative Blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left z-10">
            <h2 className="font-headline text-primary text-xl font-bold mb-4">Hello, I'm</h2>
            <h1 className="font-headline text-6xl md:text-8xl font-black mb-6 leading-[1.1] tracking-tight">
              Arham Waqas <br />
              <span className="text-primary">Web Creator</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed mx-auto lg:mx-0">
              Transforming your ideas into digital reality. I specialize in building 
              high-performance websites and immersive user experiences that drive growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 h-16 text-lg font-bold shadow-[0_10px_30px_-10px_rgba(234,179,8,0.5)] transition-all hover:translate-y-[-2px]">
                <Link href="#portfolio">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <button className="flex items-center gap-3 font-bold hover:text-primary transition-colors group">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                  <Play className="fill-current h-5 w-5 ml-1" />
                </div>
                Watch Intro
              </button>
            </div>
            
            {/* Experience Badge */}
            <div className="mt-12 flex items-center gap-4 justify-center lg:justify-start">
              <div className="bg-card border border-white/5 p-4 rounded-2xl flex items-center gap-3">
                <span className="text-4xl font-black text-primary">1+</span>
                <span className="text-sm font-bold text-muted-foreground leading-tight">Years <br />Experience</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-10 w-full max-w-lg mx-auto aspect-square">
              {/* Background Shapes */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary rounded-full -z-10 opacity-50 blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 border-2 border-primary/30 rounded-full -z-10 animate-pulse"></div>
              
              <div className="relative w-full h-full rounded-full overflow-hidden border-[12px] border-card shadow-2xl transition-all duration-700 hover:scale-105">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
