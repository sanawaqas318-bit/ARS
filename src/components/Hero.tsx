"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const profileImg = PlaceHolderImages.find((img) => img.id === "profile");

  return (
    <section className="relative pt-40 pb-20 md:pt-56 md:pb-40 overflow-hidden bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <div className="flex-1 text-center lg:text-left z-10">
            <h2 className="text-3xl font-bold mb-4">Hello, I'm</h2>
            <h1 className="text-7xl md:text-9xl font-black mb-4 leading-none tracking-tight">
              Arham
            </h1>
            <h2 className="text-5xl md:text-7xl font-black text-primary mb-10 leading-none">
              A Frontend Developer
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0 font-medium">
              I design and build beautiful and functional web experiences. 
              Passionate about creating high-quality websites and stores, 
              committed to delivering the best possible user experiences.
            </p>
            
            {/* Small subtle logo like in reference */}
            <div className="mt-20 flex justify-center lg:justify-start">
               <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-muted-foreground font-black text-sm">
                N
               </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full max-w-md md:max-w-lg mx-auto aspect-square">
              {/* Profile Circle with specific border styling from reference */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-[12px] border-card shadow-2xl">
                <div className="absolute inset-0 border-[6px] border-primary rounded-full z-20 pointer-events-none opacity-40"></div>
                {profileImg && (
                  <Image 
                    src={profileImg.imageUrl} 
                    alt="Arham's Profile"
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint="professional man"
                  />
                )}
              </div>

              {/* Experience Badge exactly matching reference */}
              <div className="absolute bottom-12 -right-4 md:right-0 bg-card border border-white/10 p-6 md:p-8 rounded-[2rem] shadow-2xl flex flex-col items-center justify-center min-w-[140px] md:min-w-[160px] z-30 transition-transform hover:scale-105 duration-300">
                <span className="text-4xl md:text-5xl font-black text-primary leading-none">1+</span>
                <span className="text-[10px] md:text-xs font-black text-muted-foreground uppercase tracking-[0.2em] mt-3 text-center leading-tight">
                  Years <br /> Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}
