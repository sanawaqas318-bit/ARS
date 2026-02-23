"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'h-20 bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'h-24 bg-transparent'}`}>
      <nav className="container mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="font-headline text-2xl font-black tracking-tighter group">
          PANTHA<span className="text-primary group-hover:animate-pulse">.</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <a href="#contact" className="h-12 px-6 bg-white/5 hover:bg-primary hover:text-black border border-white/10 rounded-xl flex items-center justify-center text-xs font-black uppercase tracking-widest transition-all">
          Hire Me
        </a>
      </nav>
    </header>
  );
}
