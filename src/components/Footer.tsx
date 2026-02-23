"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-20 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-6 text-center md:text-left">
            <Link href="/" className="font-headline text-4xl font-black tracking-tighter">
              PANTHA<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Building high-quality digital experiences that combine aesthetic appeal with functional excellence.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex items-center gap-10">
              <Link href="#about" className="text-sm font-black uppercase tracking-widest hover:text-primary transition-colors">About</Link>
              <Link href="#services" className="text-sm font-black uppercase tracking-widest hover:text-primary transition-colors">Services</Link>
              <Link href="#portfolio" className="text-sm font-black uppercase tracking-widest hover:text-primary transition-colors">Portfolio</Link>
            </div>
            <div className="h-10 w-px bg-white/10 hidden md:block"></div>
            <p className="text-muted-foreground text-xs font-black uppercase tracking-widest">
              &copy; {currentYear} PANTHA STUDIO
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
