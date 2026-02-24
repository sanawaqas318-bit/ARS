"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Star } from "lucide-react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, ISourceOptions } from "@tsparticles/engine";

export function Hero() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#822DFA",
        },
        links: {
          color: "#822DFA",
          distance: 150,
          enable: true,
          opacity: 1,
          width: 2,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 150,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 5 },
        },
      },
      detectRetina: true,
      fullScreen: { enable: false },
    }),
    [],
  );

  const profileImg = PlaceHolderImages.find((img) => img.id === "profile");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Particle Background */}
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="absolute inset-0 z-0"
        />
      )}
      
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/30 pointer-events-none"></div>
      
      {/* Decorative Radial pattern */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 py-20 md:py-0 max-w-7xl z-10 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Circular Image Container with Badge */}
          <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-1 relative">
            <div className="relative group">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden border-4 border-foreground/10 shadow-[0_0_50px_rgba(130,45,250,0.1)] transition-transform duration-500 group-hover:scale-[1.02]">
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
              
              {/* Experience Badge */}
              <div className="absolute -bottom-4 -right-4 md:bottom-10 md:-right-6 bg-primary text-primary-foreground p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col items-center animate-bounce-slow">
                <Star className="w-5 h-5 md:w-6 md:h-6 mb-1 fill-primary-foreground" />
                <span className="text-xl md:text-3xl font-black leading-none">1+</span>
                <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-tighter">Years Exp.</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 md:space-y-8 order-2 lg:order-2">
            <div className="space-y-2 animate-fade-in-up">
              <span className="text-primary text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-4 block">Frontend Developer</span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-tight tracking-tighter">
                Arham<br />Waqas
              </h1>
            </div>
            
            <p className="text-sm md:text-lg lg:text-xl text-foreground/50 max-w-lg leading-relaxed mx-auto lg:mx-0 font-medium animate-fade-in-up [animation-delay:200ms]">
              I specialize in creating pixel-perfect, interactive, and high-performance digital experiences that help businesses stand out online.
            </p>
            
            <div className="pt-4 md:pt-8 animate-fade-in-up [animation-delay:400ms]">
              <a 
                href="#portfolio" 
                className="inline-flex items-center gap-3 px-8 md:px-12 h-14 md:h-16 bg-primary text-primary-foreground rounded-xl font-black text-sm md:text-lg transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-2xl shadow-primary/20"
              >
                Explore My Work <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Small Logo Mark */}
      <div className="absolute bottom-10 left-10 hidden md:block opacity-30">
        <div className="w-12 h-12 bg-foreground/5 border border-foreground/10 rounded-full flex items-center justify-center">
          <span className="text-foreground/40 font-black text-lg">P</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/20">
        <span className="text-[10px] font-black uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent"></div>
      </div>

      {/* Decorative Dots Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-20"></div>
    </section>
  );
}
