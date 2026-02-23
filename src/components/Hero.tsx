"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const profileImg = PlaceHolderImages.find((img) => img.id === "profile");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background bg-grid-pattern">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 max-w-7xl z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-card border border-white/5 rounded-full mb-4">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Available for work</span>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-white/80">Hello, I'm</h2>
              <h1 className="text-8xl md:text-9xl font-black leading-none tracking-tighter text-white">
                ARHAM<span className="text-primary">.</span>
              </h1>
              <div className="relative inline-block">
                <h2 className="text-4xl md:text-6xl font-black text-primary leading-none">
                  FRONTEND DEVELOPER
                </h2>
                <div className="absolute -bottom-4 left-0 w-full h-1 bg-primary/30 rounded-full"></div>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0 font-medium">
              I specialize in building high-end digital experiences that balance bold aesthetics with flawless functionality. Based in Lahore, working globally.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-6">
              <a href="#contact" className="px-10 h-16 bg-primary text-black flex items-center justify-center rounded-2xl font-black text-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 active:scale-95">
                Let's Talk
              </a>
              <a href="#portfolio" className="px-10 h-16 border border-white/10 hover:border-primary/50 text-white flex items-center justify-center rounded-2xl font-black text-lg transition-all hover:bg-white/5 active:scale-95">
                View Portfolio
              </a>
            </div>
            
            {/* Minimal Brand Mark */}
            <div className="pt-12 hidden lg:block">
               <div className="w-14 h-14 border-2 border-primary/20 rounded-2xl flex items-center justify-center text-primary font-black text-xl hover:border-primary hover:rotate-12 transition-all duration-500 cursor-default">
                A
               </div>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="flex-1 relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-[450px] md:max-w-[550px] mx-auto aspect-square">
              
              {/* Circular Container with complex borders */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-[16px] border-card shadow-[0_0_100px_rgba(0,0,0,0.5)] animate-float">
                <div className="absolute inset-0 border-[8px] border-primary/20 rounded-full z-20 pointer-events-none"></div>
                <div className="absolute inset-4 border-[2px] border-dashed border-primary/30 rounded-full z-20 pointer-events-none animate-spin-slow"></div>
                
                {profileImg && (
                  <Image 
                    src={profileImg.imageUrl} 
                    alt="Arham"
                    fill
                    className="object-cover scale-110 hover:scale-125 transition-transform duration-700"
                    priority
                    data-ai-hint="professional developer"
                  />
                )}
              </div>

              {/* Float Tags */}
              <div className="absolute top-10 -right-4 bg-primary text-black p-4 rounded-2xl shadow-2xl font-black text-sm rotate-6 animate-float" style={{ animationDelay: '1s' }}>
                React & Next.js
              </div>
              
              <div className="absolute bottom-20 -left-10 bg-card border border-white/10 p-5 rounded-3xl shadow-2xl animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-black text-2xl">
                    1+
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Years of</span>
                    <span className="font-black text-sm">Experience</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground opacity-50 hover:opacity-100 transition-opacity cursor-pointer animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
