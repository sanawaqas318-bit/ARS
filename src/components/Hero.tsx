"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const profileImg = PlaceHolderImages.find((img) => img.id === "profile");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1f2b]">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f2b] to-[#11141d]"></div>
      
      <div className="container mx-auto px-6 max-w-6xl z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Circular Image Container */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
              {profileImg && (
                <Image 
                  src={profileImg.imageUrl} 
                  alt="Arham Waqas"
                  fill
                  className="object-cover"
                  priority
                />
              )}
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="space-y-2">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight">
                Arham<br />Waqas
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-primary">
                Frontend Developer & Web Creator
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-white/60 max-w-lg leading-relaxed mx-auto lg:mx-0 font-medium">
              I design and build beautiful and functional web experiences. Specializing in modern, responsive, and high-performance applications.
            </p>
            
            <div className="pt-8">
              <a 
                href="#about" 
                className="inline-flex items-center gap-2 px-10 h-14 bg-primary text-black rounded-lg font-bold text-lg transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-xl shadow-primary/10"
              >
                Explore My Work <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Small Logo Mark in bottom left */}
      <div className="absolute bottom-10 left-10 hidden md:block">
        <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
          <span className="text-white/40 font-black text-sm">N</span>
        </div>
      </div>

      {/* Decorative Dots Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none opacity-20"></div>
    </section>
  );
}
