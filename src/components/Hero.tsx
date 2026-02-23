"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const profileImg = PlaceHolderImages.find((img) => img.id === "profile");

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
      {/* Decorative Elements matching pattern */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
      
      {/* Hand-drawn style decorative SVGs */}
      <svg className="absolute top-20 right-[15%] w-24 h-24 text-primary/30 animate-float" viewBox="0 0 100 100">
        <path d="M10,50 Q40,10 70,50 T130,50" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      <svg className="absolute bottom-40 left-[10%] w-16 h-16 text-primary/30 animate-pulse" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
      </svg>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 text-center lg:text-left z-10">
            <h2 className="font-headline text-primary text-xl font-bold mb-4 tracking-widest uppercase">Hello, I'm</h2>
            <h1 className="font-headline text-6xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tight">
              Arham Waqas <br />
              <span className="text-primary italic">Web Creator</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl leading-relaxed mx-auto lg:mx-0">
              Transforming your ideas into digital reality. I specialize in building 
              high-performance websites and immersive user experiences that drive growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-12 h-16 text-lg font-bold shadow-[0_10px_40px_-10px_rgba(234,179,8,0.6)] transition-all hover:translate-y-[-4px] active:translate-y-0">
                <Link href="#portfolio">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-10 w-full max-w-lg mx-auto aspect-square">
              {/* Reference Pattern: Circular profile with geometric accents */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full -z-10 blur-xl"></div>
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_20s_linear_infinite] border-dashed"></div>
              
              <div className="relative w-full h-full rounded-full overflow-hidden border-[16px] border-card shadow-2xl transition-all duration-700 hover:scale-[1.02] group">
                {profileImg && (
                  <Image 
                    src={profileImg.imageUrl} 
                    alt={profileImg.description}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                )}
                {/* Overlay Badge matching reference */}
                <div className="absolute bottom-10 right-0 bg-background/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-float">
                  <span className="text-3xl font-black text-primary">1+</span>
                  <span className="text-[10px] font-black text-muted-foreground uppercase leading-none tracking-tighter">Years <br />Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
