"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link href="/" className="font-headline text-2xl font-black tracking-tighter">
            PANTHA<span className="text-primary">.</span>
          </Link>
          
          <div className="flex items-center gap-10">
            <Link href="#about" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">About</Link>
            <Link href="#skills" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Skills</Link>
            <Link href="#portfolio" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Portfolio</Link>
          </div>
          
          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
            &copy; {currentYear} PANTHA STUDIO
          </p>
        </div>
      </div>
    </footer>
  );
}